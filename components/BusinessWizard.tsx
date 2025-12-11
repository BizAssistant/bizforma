import { useState } from 'react';
import { ProgressStepper } from './ProgressStepper';
import { ConceptStep } from './steps/ConceptStep';
import { NameSelectionStep } from './steps/NameSelectionStep';
import { EntityTypeStep } from './steps/EntityTypeStep';
import { RegistrationStep } from './steps/RegistrationStep';
import { EINTaxStep } from './steps/EINTaxStep';
import { ComplianceStep } from './steps/ComplianceStep';
import { AccountingStep } from './steps/AccountingStep';
import { FinancingStep } from './steps/FinancingStep';
import { MarketingStep } from './steps/MarketingStep';
import { WebDesignStep } from './steps/WebDesignStep';
import { CalendarStep } from './steps/CalendarStep';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import '../styles/globals.css';

export interface BusinessData {
  concept: {
    businessIdea: string;
    targetMarket: string;
    products: string;
    uniqueValue: string;
  };
  naming: {
    businessName: string;
    alternateNames: string;
    domainAvailable: boolean;
  };
  entity: {
    type: string;
    state: string;
    owners: string;
  };
  registration: {
    registeredAgent: string;
    businessAddress: string;
    mailingAddress: string;
  };
  einTax: {
    einApplied: boolean;
    einNumber: string;
    taxElection: string;
  };
  compliance: {
    sosFilingDate: string;
    annualReportRequired: boolean;
    salesTaxPermit: boolean;
  };
  accounting: {
    software: string;
    accountant: string;
    taxStrategy: string;
  };
  financing: {
    startupCosts: string;
    fundingSources: string;
    businessAccount: string;
  };
  marketing: {
    strategy: string;
    channels: string;
    budget: string;
  };
  webDesign: {
    domainName: string;
    hosting: string;
    dnsProvider: string;
    emailSetup: string;
  };
}

const steps = [
  { id: 1, name: 'Concept', description: 'Define your business idea' },
  { id: 2, name: 'Naming', description: 'Choose your business name' },
  { id: 3, name: 'Entity Type', description: 'Select business structure' },
  { id: 4, name: 'Registration', description: 'Register your business' },
  { id: 5, name: 'EIN & Tax', description: 'Tax identification setup' },
  { id: 6, name: 'Compliance', description: 'State & revenue compliance' },
  { id: 7, name: 'Accounting', description: 'Setup accounting & tax' },
  { id: 8, name: 'Financing', description: 'Funding & banking' },
  { id: 9, name: 'Marketing', description: 'Marketing strategy' },
  { id: 10, name: 'Web & Domain', description: 'Online presence' },
  { id: 11, name: 'Calendar', description: 'Compliance & tax dates' },
];

export function BusinessWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [businessData, setBusinessData] = useState<BusinessData>({
    concept: { businessIdea: '', targetMarket: '', products: '', uniqueValue: '' },
    naming: { businessName: '', alternateNames: '', domainAvailable: false },
    entity: { type: '', state: '', owners: '' },
    registration: { registeredAgent: '', businessAddress: '', mailingAddress: '' },
    einTax: { einApplied: false, einNumber: '', taxElection: '' },
    compliance: { sosFilingDate: '', annualReportRequired: false, salesTaxPermit: false },
    accounting: { software: '', accountant: '', taxStrategy: '' },
    financing: { startupCosts: '', fundingSources: '', businessAccount: '' },
    marketing: { strategy: '', channels: '', budget: '' },
    webDesign: { domainName: '', hosting: '', dnsProvider: '', emailSetup: '' },
  });

  const updateData = (section: keyof BusinessData, data: any) => {
    setBusinessData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const downloadSummary = () => {
    const summary = `
BUSINESS FORMATION SUMMARY
Generated: ${new Date().toLocaleDateString()}

═══════════════════════════════════════════════════════

BUSINESS CONCEPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Business Idea: ${businessData.concept.businessIdea}
Target Market: ${businessData.concept.targetMarket}
Products/Services: ${businessData.concept.products}
Unique Value: ${businessData.concept.uniqueValue}

BUSINESS NAME & BRANDING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Business Name: ${businessData.naming.businessName}
Alternate Names: ${businessData.naming.alternateNames}

ENTITY STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Entity Type: ${businessData.entity.type}
State: ${businessData.entity.state}
Number of Owners: ${businessData.entity.owners}

REGISTRATION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Registered Agent: ${businessData.registration.registeredAgent}
Business Address: ${businessData.registration.businessAddress}
Mailing Address: ${businessData.registration.mailingAddress}

TAX SETUP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EIN Number: ${businessData.einTax.einNumber}
Tax Election: ${businessData.einTax.taxElection}

COMPLIANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SOS Filing Date: ${businessData.compliance.sosFilingDate}
Annual Report Required: ${businessData.compliance.annualReportRequired ? 'Yes' : 'No'}
Sales Tax Permit: ${businessData.compliance.salesTaxPermit ? 'Yes' : 'No'}

ACCOUNTING & TAX STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Accounting Software: ${businessData.accounting.software}
Accountant/CPA: ${businessData.accounting.accountant}
Tax Strategy: ${businessData.accounting.taxStrategy}

FINANCING & BANKING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Startup Costs: ${businessData.financing.startupCosts}
Funding Sources: ${businessData.financing.fundingSources}
Business Bank Account: ${businessData.financing.businessAccount}

MARKETING PLAN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Strategy: ${businessData.marketing.strategy}
Channels: ${businessData.marketing.channels}
Budget: ${businessData.marketing.budget}

WEB PRESENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Domain Name: ${businessData.webDesign.domainName}
Hosting Provider: ${businessData.webDesign.hosting}
DNS Provider: ${businessData.webDesign.dnsProvider}
Email Setup: ${businessData.webDesign.emailSetup}

═══════════════════════════════════════════════════════
    `;

    const blob = new Blob([summary], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${businessData.naming.businessName || 'business'}-formation-summary.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ConceptStep data={businessData.concept} updateData={(data) => updateData('concept', data)} />;
      case 2:
        return <NameSelectionStep data={businessData.naming} updateData={(data) => updateData('naming', data)} />;
      case 3:
        return <EntityTypeStep data={businessData.entity} updateData={(data) => updateData('entity', data)} />;
      case 4:
        return <RegistrationStep data={businessData.registration} updateData={(data) => updateData('registration', data)} />;
      case 5:
        return <EINTaxStep data={businessData.einTax} updateData={(data) => updateData('einTax', data)} />;
      case 6:
        return <ComplianceStep data={businessData.compliance} updateData={(data) => updateData('compliance', data)} />;
      case 7:
        return <AccountingStep data={businessData.accounting} updateData={(data) => updateData('accounting', data)} />;
      case 8:
        return <FinancingStep data={businessData.financing} updateData={(data) => updateData('financing', data)} />;
      case 9:
        return <MarketingStep data={businessData.marketing} updateData={(data) => updateData('marketing', data)} />;
      case 10:
        return <WebDesignStep data={businessData.webDesign} updateData={(data) => updateData('webDesign', data)} />;
      case 11:
        return <CalendarStep businessData={businessData} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 relative z-10">
      {/* Header with glass effect */}
      <div className="text-center mb-8 relative">
        <div className="inline-block">
          <div className="relative">
            {/* Glow effect behind title */}
            <div className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500"></div>
            <h1 className="relative bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent mb-2">
              Business Formation Assistant
            </h1>
          </div>
          <p className="text-gray-400 relative">
            Complete guide from concept to launch
          </p>
        </div>
      </div>

      <ProgressStepper steps={steps} currentStep={currentStep} onStepClick={setCurrentStep} />

      {/* Glass card with metallic border */}
      <div className="mt-8 relative group">
        {/* Metallic border glow */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 rounded-[15px] opacity-75 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
        
        {/* Main glass card */}
        <div 
          className="relative backdrop-blur-xl bg-white/[0.03] rounded-[14px] p-8 border border-white/10 shadow-2xl overflow-hidden"
          style={{
            boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Metallic gradient overlay */}
          <div 
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          ></div>
          
          {renderStep()}
        </div>
      </div>

      {/* Navigation buttons with glass and glow */}
      <div className="flex justify-between items-center mt-8 gap-4">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="group relative flex items-center gap-2 px-6 py-3 rounded-xl overflow-hidden transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {/* Glass background */}
          <div className="absolute inset-0 backdrop-blur-md bg-white/[0.05] border border-white/10 rounded-xl"></div>
          
          {/* Hover glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 group-disabled:opacity-0 transition-opacity duration-300 rounded-xl blur-sm"></div>
          
          <ChevronLeft className="w-5 h-5 relative z-10 text-gray-300 group-hover:text-white transition-colors" />
          <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors">Previous</span>
        </button>

        {currentStep === steps.length && (
          <button
            onClick={downloadSummary}
            className="group relative flex items-center gap-2 px-6 py-3 rounded-xl overflow-hidden transition-all duration-300"
          >
            {/* Metallic gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/80 via-emerald-500/80 to-teal-500/80 rounded-xl"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50"></div>
            
            <Download className="w-5 h-5 relative z-10 text-white" />
            <span className="relative z-10 text-white">Download Summary</span>
          </button>
        )}

        <button
          onClick={nextStep}
          disabled={currentStep === steps.length}
          className="group relative flex items-center gap-2 px-6 py-3 rounded-xl overflow-hidden transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {/* Metallic gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-red-600/90 to-orange-700/90 rounded-xl"></div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 opacity-0 group-hover:opacity-75 group-disabled:opacity-0 blur-xl transition-opacity duration-300"></div>
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60"></div>
          
          <span className="relative z-10 text-white">Next</span>
          <ChevronRight className="w-5 h-5 relative z-10 text-white" />
        </button>
      </div>
    </div>
  );
}
