import { DollarSign } from 'lucide-react';

interface FinancingStepProps {
  data: {
    startupCosts: string;
    fundingSources: string;
    businessAccount: string;
  };
  updateData: (data: any) => void;
}

export function FinancingStep({ data, updateData }: FinancingStepProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
          <DollarSign className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h2>Financing & Funding</h2>
          <p className="text-gray-600">Secure funding and set up business banking</p>
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
        <h3 className="text-emerald-900 mb-2">Business Banking is Essential</h3>
        <p className="text-emerald-800">
          Opening a dedicated business bank account is crucial for liability protection, tax compliance, professional credibility, and simplified bookkeeping.
        </p>
      </div>

      <div>
        <label htmlFor="startupCosts" className="block text-gray-700 mb-2">
          Estimated Startup Costs
        </label>
        <input
          type="text"
          id="startupCosts"
          value={data.startupCosts}
          onChange={(e) => updateData({ startupCosts: e.target.value })}
          placeholder="e.g., $10,000 - $50,000"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <p className="text-gray-600 mt-1">
          Include equipment, inventory, licensing, marketing, and 3-6 months of operating expenses
        </p>
      </div>

      <div>
        <label htmlFor="fundingSources" className="block text-gray-700 mb-2">
          Funding Sources
        </label>
        <textarea
          id="fundingSources"
          rows={4}
          value={data.fundingSources}
          onChange={(e) => updateData({ fundingSources: e.target.value })}
          placeholder="Describe your funding sources: personal savings, loans, investors, crowdfunding, etc."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label htmlFor="businessAccount" className="block text-gray-700 mb-2">
          Business Bank Account
        </label>
        <input
          type="text"
          id="businessAccount"
          value={data.businessAccount}
          onChange={(e) => updateData({ businessAccount: e.target.value })}
          placeholder="Bank name and account type"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="mb-3">Business Banking Checklist</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Business checking account opened</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Business savings account (optional but recommended)</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Business credit card obtained</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Merchant services/payment processing set up</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Accounting software connected to bank account</label>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="mb-3">Popular Business Banks</h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li>Chase Business Banking</li>
            <li>Bank of America</li>
            <li>Wells Fargo</li>
            <li>US Bank</li>
            <li>Bluevine (online)</li>
            <li>Novo (online)</li>
            <li>Mercury (tech startups)</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="mb-3">What to Bring to Bank</h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li>EIN confirmation letter</li>
            <li>Articles of Organization</li>
            <li>Operating Agreement</li>
            <li>Government-issued ID</li>
            <li>Business license (if applicable)</li>
            <li>Initial deposit</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="mb-3">Funding Options</h3>
        <div className="space-y-3">
          <div>
            <h4 className="text-gray-900">Self-Funding (Bootstrapping)</h4>
            <p className="text-gray-700">Personal savings, home equity, or retirement funds</p>
          </div>
          <div>
            <h4 className="text-gray-900">Small Business Loans</h4>
            <p className="text-gray-700">SBA loans, bank loans, online lenders (Kabbage, OnDeck, Fundbox)</p>
          </div>
          <div>
            <h4 className="text-gray-900">Business Credit Cards</h4>
            <p className="text-gray-700">Good for short-term financing and building business credit</p>
          </div>
          <div>
            <h4 className="text-gray-900">Friends & Family</h4>
            <p className="text-gray-700">Document agreements formally to avoid disputes</p>
          </div>
          <div>
            <h4 className="text-gray-900">Angel Investors & Venture Capital</h4>
            <p className="text-gray-700">For high-growth potential businesses</p>
          </div>
          <div>
            <h4 className="text-gray-900">Crowdfunding</h4>
            <p className="text-gray-700">Kickstarter, Indiegogo, GoFundMe</p>
          </div>
          <div>
            <h4 className="text-gray-900">Grants</h4>
            <p className="text-gray-700">Government grants, industry-specific programs</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800">
          <span>💡 Tip:</span> Build business credit early by opening accounts with vendors who report to business credit bureaus (Dun & Bradstreet, Experian Business, Equifax Business).
        </p>
      </div>
    </div>
  );
}
