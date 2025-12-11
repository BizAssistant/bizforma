// API utilities for Cloudflare backend integration
// Use these functions to interact with your Cloudflare Workers API

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export interface BusinessData {
  businessName: string;
  entityType?: string;
  state?: string;
  industry?: string;
  concept?: string;
  targetMarket?: string;
  ein?: string;
  stateId?: string;
  registrationDate?: string;
  [key: string]: any;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

/**
 * Save business data to Cloudflare D1 database
 */
export async function saveBusiness(data: BusinessData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/business`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error saving business:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Retrieve business data from Cloudflare D1 database
 */
export async function getBusiness(businessName: string): Promise<ApiResponse<BusinessData>> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/business?name=${encodeURIComponent(businessName)}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching business:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Save form progress to session storage (temporary)
 * Later can be moved to KV storage for persistence
 */
export function saveProgress(step: number, formData: any): void {
  try {
    const progressData = {
      step,
      formData,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('wizardProgress', JSON.stringify(progressData));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
}

/**
 * Load form progress from session storage
 */
export function loadProgress(): { step: number; formData: any } | null {
  try {
    const saved = localStorage.getItem('wizardProgress');
    if (!saved) return null;
    return JSON.parse(saved);
  } catch (error) {
    console.error('Error loading progress:', error);
    return null;
  }
}

/**
 * Clear saved progress
 */
export function clearProgress(): void {
  try {
    localStorage.removeItem('wizardProgress');
  } catch (error) {
    console.error('Error clearing progress:', error);
  }
}

/**
 * Generate calendar ICS file for compliance events
 */
export function generateCalendarFile(events: Array<{
  title: string;
  date: Date;
  description?: string;
}>): string {
  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  let ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Business Formation Assistant//EN',
    'CALSCALE:GREGORIAN',
  ];

  events.forEach((event) => {
    ics.push(
      'BEGIN:VEVENT',
      `DTSTART:${formatDate(event.date)}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description || ''}`,
      `UID:${Date.now()}-${Math.random()}@business-formation.app`,
      'END:VEVENT'
    );
  });

  ics.push('END:VCALENDAR');

  return ics.join('\r\n');
}

/**
 * Download calendar file
 */
export function downloadCalendar(events: Array<{
  title: string;
  date: Date;
  description?: string;
}>, filename: string = 'business-compliance-calendar.ics'): void {
  const icsContent = generateCalendarFile(events);
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

/**
 * Export business data as JSON
 */
export function exportBusinessData(data: BusinessData, filename: string = 'business-data.json'): void {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}
