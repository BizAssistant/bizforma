import { Calendar as CalendarIcon, Download } from 'lucide-react';
import { BusinessData } from '../BusinessWizard';

interface CalendarStepProps {
  businessData: BusinessData;
}

interface ComplianceEvent {
  date: string;
  title: string;
  description: string;
  category: 'tax' | 'compliance' | 'planning';
  recurring?: 'quarterly' | 'annual' | 'monthly';
}

export function CalendarStep({ businessData }: CalendarStepProps) {
  const currentYear = 2025;

  // Generate compliance events based on business data
  const complianceEvents: ComplianceEvent[] = [
    // Quarterly Estimated Taxes
    { date: '2025-01-15', title: 'Q4 2024 Estimated Tax Payment', description: 'Pay estimated taxes for Q4 of previous year', category: 'tax', recurring: 'quarterly' },
    { date: '2025-04-15', title: 'Q1 2025 Estimated Tax Payment', description: 'Pay estimated taxes for Q1', category: 'tax', recurring: 'quarterly' },
    { date: '2025-06-16', title: 'Q2 2025 Estimated Tax Payment', description: 'Pay estimated taxes for Q2 (June 16 due to weekend)', category: 'tax', recurring: 'quarterly' },
    { date: '2025-09-15', title: 'Q3 2025 Estimated Tax Payment', description: 'Pay estimated taxes for Q3', category: 'tax', recurring: 'quarterly' },
    
    // Annual Tax Filings
    { date: '2025-03-17', title: 'S-Corp/Partnership Tax Return Due', description: 'Form 1120-S or 1065 due (March 15 + weekend)', category: 'tax', recurring: 'annual' },
    { date: '2025-04-15', title: 'Individual/LLC Tax Return Due', description: 'Form 1040 with Schedule C or 1120 for C-Corp', category: 'tax', recurring: 'annual' },
    
    // Payroll Taxes (if applicable)
    { date: '2025-01-31', title: 'Q4 2024 Payroll Tax Return (941)', description: 'File Form 941 for Q4 of previous year', category: 'tax', recurring: 'quarterly' },
    { date: '2025-04-30', title: 'Q1 2025 Payroll Tax Return (941)', description: 'File Form 941 for Q1', category: 'tax', recurring: 'quarterly' },
    { date: '2025-07-31', title: 'Q2 2025 Payroll Tax Return (941)', description: 'File Form 941 for Q2', category: 'tax', recurring: 'quarterly' },
    { date: '2025-10-31', title: 'Q3 2025 Payroll Tax Return (941)', description: 'File Form 941 for Q3', category: 'tax', recurring: 'quarterly' },
    
    // Annual Forms
    { date: '2025-01-31', title: 'W-2 and 1099 Forms Due', description: 'Distribute W-2s to employees and 1099s to contractors', category: 'tax', recurring: 'annual' },
    { date: '2025-02-28', title: '1099 Filing Deadline', description: 'File 1099 forms with IRS (paper)', category: 'tax', recurring: 'annual' },
    
    // State Compliance
    { date: '2025-12-31', title: 'Review Annual Report Deadline', description: 'Check your state\'s annual report/SOI deadline (varies by state and formation date)', category: 'compliance', recurring: 'annual' },
    
    // Planning
    { date: '2025-06-30', title: 'Mid-Year Financial Review', description: 'Review financials, adjust tax strategy, evaluate business performance', category: 'planning' },
    { date: '2025-11-30', title: 'Year-End Tax Planning', description: 'Meet with CPA for year-end tax planning and strategies', category: 'planning', recurring: 'annual' },
    { date: '2025-12-15', title: 'Retirement Contribution Deadline Review', description: 'Review retirement plan contributions for tax benefits', category: 'planning', recurring: 'annual' },
  ];

  // Add state-specific events if state is selected
  if (businessData.entity.state && businessData.compliance.sosFilingDate) {
    const formationDate = new Date(businessData.compliance.sosFilingDate);
    const anniversaryMonth = formationDate.getMonth() + 1;
    const anniversaryDay = formationDate.getDate();
    
    complianceEvents.push({
      date: `2025-${String(anniversaryMonth).padStart(2, '0')}-${String(anniversaryDay).padStart(2, '0')}`,
      title: `${businessData.entity.state} Annual Report/Franchise Tax`,
      description: `Annual report and/or franchise tax may be due (check ${businessData.entity.state} Secretary of State)`,
      category: 'compliance',
      recurring: 'annual'
    });
  }

  // Sort events by date
  const sortedEvents = [...complianceEvents].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Group events by month
  const eventsByMonth = sortedEvents.reduce((acc, event) => {
    const month = new Date(event.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    if (!acc[month]) acc[month] = [];
    acc[month].push(event);
    return acc;
  }, {} as Record<string, ComplianceEvent[]>);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'tax': return {
        glow: 'from-red-500/30 to-rose-500/30',
        bg: 'from-red-500/10 to-rose-500/10',
        border: 'red-400/20',
        text: 'red-200',
        accent: 'red-400/50'
      };
      case 'compliance': return {
        glow: 'from-blue-500/30 to-cyan-500/30',
        bg: 'from-blue-500/10 to-cyan-500/10',
        border: 'blue-400/20',
        text: 'blue-200',
        accent: 'blue-400/50'
      };
      case 'planning': return {
        glow: 'from-emerald-500/30 to-teal-500/30',
        bg: 'from-emerald-500/10 to-teal-500/10',
        border: 'emerald-400/20',
        text: 'emerald-200',
        accent: 'emerald-400/50'
      };
      default: return {
        glow: 'from-gray-500/30 to-gray-600/30',
        bg: 'from-gray-500/10 to-gray-600/10',
        border: 'gray-400/20',
        text: 'gray-200',
        accent: 'gray-400/50'
      };
    }
  };

  const downloadCalendar = () => {
    let icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Business Formation Assistant//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Business Compliance Calendar
X-WR-TIMEZONE:America/New_York
`;

    sortedEvents.forEach((event, index) => {
      const eventDate = new Date(event.date);
      const dateStr = eventDate.toISOString().replace(/[-:]/g, '').split('T')[0];
      
      icsContent += `BEGIN:VEVENT
DTSTART;VALUE=DATE:${dateStr}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
UID:event-${index}@businessformation.app
SEQUENCE:0
STATUS:CONFIRMED
TRANSP:TRANSPARENT
END:VEVENT
`;
    });

    icsContent += 'END:VCALENDAR';

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'business-compliance-calendar.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative w-12 h-12 rounded-2xl backdrop-blur-md bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center border border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
              <CalendarIcon className="w-6 h-6 text-violet-300 relative z-10" />
            </div>
          </div>
          <div>
            <h2 className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">Compliance Calendar</h2>
            <p className="text-gray-400">Important tax dates and compliance deadlines for {currentYear}</p>
          </div>
        </div>
        
        <button
          onClick={downloadCalendar}
          className="group relative flex items-center gap-2 px-4 py-2 rounded-xl overflow-hidden transition-all duration-300"
        >
          {/* Metallic gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/90 via-fuchsia-600/90 to-purple-600/90 rounded-xl"></div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500 opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-300"></div>
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60"></div>
          
          <Download className="w-4 h-4 relative z-10 text-white" />
          <span className="relative z-10 text-white">Export to Calendar</span>
        </button>
      </div>

      {/* Info box */}
      <div className="relative">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 rounded-lg opacity-75 blur-sm"></div>
        <div className="relative backdrop-blur-md bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-400/20 rounded-lg p-4 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"></div>
          <h3 className="text-violet-200 mb-2">Stay Compliant &amp; Avoid Penalties</h3>
          <p className="text-violet-200/90 mb-2">
            This calendar includes key tax and compliance deadlines for your business. Set reminders in your calendar app and consider working with a CPA to ensure you don&apos;t miss important dates.
          </p>
          <p className="text-violet-200/90">
            <span className="text-violet-300">Note:</span> Deadlines may vary based on your specific business structure, state, and circumstances. Always verify dates with official sources or your tax professional.
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-4 mb-4 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-red-500 shadow-lg shadow-red-500/50"></div>
          <span className="text-gray-300">Tax Deadlines</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-blue-500 shadow-lg shadow-blue-500/50"></div>
          <span className="text-gray-300">Compliance</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-emerald-500 shadow-lg shadow-emerald-500/50"></div>
          <span className="text-gray-300">Planning</span>
        </div>
      </div>

      {/* Events by month */}
      <div className="space-y-6">
        {Object.entries(eventsByMonth).map(([month, events]) => (
          <div key={month}>
            <h3 className="text-gray-200 mb-3">{month}</h3>
            <div className="space-y-3">
              {events.map((event, index) => {
                const colors = getCategoryColor(event.category);
                return (
                  <div key={index} className="relative">
                    <div className={`absolute -inset-[1px] bg-gradient-to-r ${colors.glow} rounded-lg blur-sm opacity-75`}></div>
                    <div className={`relative backdrop-blur-md bg-gradient-to-br ${colors.bg} border border-${colors.border} rounded-lg p-4 overflow-hidden`}>
                      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${colors.accent} to-transparent`}></div>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className={`font-mono text-${colors.text}`}>
                              {new Date(event.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </span>
                            <h4 className={`text-${colors.text}`}>{event.title}</h4>
                          </div>
                          <p className={`text-${colors.text}/80`}>
                            {event.description}
                          </p>
                          {event.recurring && (
                            <span className="inline-block mt-2 px-2 py-1 rounded text-xs backdrop-blur-sm bg-white/10 border border-white/10 text-gray-300">
                              Recurring: {event.recurring}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Reminders box */}
      <div className="relative group mt-6">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-lg opacity-75 blur-sm"></div>
        <div className="relative backdrop-blur-md bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-400/20 rounded-lg p-4 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
          <h4 className="text-amber-200 mb-2">Important Reminders:</h4>
          <ul className="text-amber-200/90 space-y-1 list-disc list-inside">
            <li>Sales tax filing frequency varies by state and sales volume (monthly, quarterly, or annual)</li>
            <li>Some states have additional franchise taxes or business taxes</li>
            <li>Professional licenses and permits may have their own renewal deadlines</li>
            <li>Industry-specific regulations may require additional filings</li>
            <li>Set up automatic reminders 2-4 weeks before each deadline</li>
            <li>Keep copies of all filings and confirmations for at least 7 years</li>
          </ul>
        </div>
      </div>

      {/* Tip box */}
      <div className="relative group">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 rounded-lg opacity-75 blur-sm"></div>
        <div className="relative backdrop-blur-md bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-400/20 rounded-lg p-4 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
          <p className="text-cyan-200/90 flex items-start gap-2">
            <span className="text-lg">💡</span>
            <span>
              <span className="text-cyan-300">Tip:</span> Consider setting up a dedicated business calendar and sharing it with your accountant or bookkeeper. Use automated reminders to stay ahead of deadlines.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}