import { BookOpen } from 'lucide-react';

interface AccountingStepProps {
  data: {
    software: string;
    accountant: string;
    taxStrategy: string;
  };
  updateData: (data: any) => void;
}

const accountingSoftware = [
  { value: 'quickbooks', label: 'QuickBooks Online', description: 'Most popular, comprehensive features' },
  { value: 'xero', label: 'Xero', description: 'User-friendly, great for small businesses' },
  { value: 'freshbooks', label: 'FreshBooks', description: 'Best for service-based businesses' },
  { value: 'wave', label: 'Wave', description: 'Free option with paid add-ons' },
  { value: 'zoho', label: 'Zoho Books', description: 'Affordable with CRM integration' },
  { value: 'sage', label: 'Sage Business Cloud', description: 'Good for growing businesses' },
];

export function AccountingStep({ data, updateData }: AccountingStepProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-teal-600" />
        </div>
        <div>
          <h2>Accounting & Tax Strategy</h2>
          <p className="text-gray-600">Set up your accounting system and tax planning</p>
        </div>
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
        <h3 className="text-teal-900 mb-2">Why Proper Accounting Matters</h3>
        <p className="text-teal-800">
          Good accounting helps you track profitability, manage cash flow, prepare for taxes, make informed decisions, and stay audit-ready. Start with good habits from day one.
        </p>
      </div>

      <div>
        <label htmlFor="software" className="block text-gray-700 mb-2">
          Accounting Software
        </label>
        <select
          id="software"
          value={data.software}
          onChange={(e) => updateData({ software: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="">Select accounting software...</option>
          {accountingSoftware.map(sw => (
            <option key={sw.value} value={sw.value}>{sw.label} - {sw.description}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="accountant" className="block text-gray-700 mb-2">
          CPA/Accountant Contact
        </label>
        <input
          type="text"
          id="accountant"
          value={data.accountant}
          onChange={(e) => updateData({ accountant: e.target.value })}
          placeholder="Name and contact info of your CPA or accounting firm"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <p className="text-gray-600 mt-1">
          Consider hiring a CPA for tax planning, especially in your first year
        </p>
      </div>

      <div>
        <label htmlFor="taxStrategy" className="block text-gray-700 mb-2">
          Tax Strategy Notes
        </label>
        <textarea
          id="taxStrategy"
          rows={4}
          value={data.taxStrategy}
          onChange={(e) => updateData({ taxStrategy: e.target.value })}
          placeholder="Document your tax strategy, deductions to track, estimated tax plans, etc."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="mb-3">Accounting Setup Checklist</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Choose and set up accounting software</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Connect business bank account to software</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Set up chart of accounts</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Create invoice templates</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Establish bookkeeping routine (weekly/monthly)</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Set up expense tracking system</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Schedule quarterly tax estimate calculations</label>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="mb-3">Common Business Deductions</h3>
        <div className="grid md:grid-cols-2 gap-2 text-gray-700">
          <div className="flex items-center gap-2">
            <span className="text-teal-600">✓</span>
            <span>Home office expenses</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-teal-600">✓</span>
            <span>Business vehicle use</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-teal-600">✓</span>
            <span>Equipment & supplies</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-teal-600">✓</span>
            <span>Software subscriptions</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-teal-600">✓</span>
            <span>Professional services</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-teal-600">✓</span>
            <span>Marketing & advertising</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-teal-600">✓</span>
            <span>Travel & meals (50%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-teal-600">✓</span>
            <span>Insurance premiums</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-teal-600">✓</span>
            <span>Interest on business loans</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-teal-600">✓</span>
            <span>Retirement contributions</span>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h4 className="text-amber-900 mb-2">Tax Planning Tips:</h4>
        <ul className="text-amber-800 space-y-1 list-disc list-inside">
          <li>Separate business and personal expenses completely</li>
          <li>Save 25-30% of income for taxes if paying estimated quarterly taxes</li>
          <li>Track mileage with an app like MileIQ or Everlance</li>
          <li>Keep all receipts and documentation for 7 years</li>
          <li>Consider retirement plans (Solo 401k, SEP IRA) for tax benefits</li>
          <li>Review tax strategy with CPA before year-end</li>
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800">
          <span>💡 Tip:</span> Reconcile your books monthly and review financial statements regularly. This helps you spot issues early and make data-driven decisions.
        </p>
      </div>
    </div>
  );
}
