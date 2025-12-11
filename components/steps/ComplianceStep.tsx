import { Shield } from 'lucide-react';

interface ComplianceStepProps {
  data: {
    sosFilingDate: string;
    annualReportRequired: boolean;
    salesTaxPermit: boolean;
  };
  updateData: (data: any) => void;
}

export function ComplianceStep({ data, updateData }: ComplianceStepProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
          <Shield className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <h2>State & Revenue Compliance</h2>
          <p className="text-gray-600">Stay compliant with Secretary of State and Department of Revenue</p>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h3 className="text-red-900 mb-2">Ongoing Compliance Requirements</h3>
        <p className="text-red-800">
          After formation, your business must maintain good standing with state agencies through regular filings, fees, and permits.
        </p>
      </div>

      <div>
        <label htmlFor="sosFilingDate" className="block text-gray-700 mb-2">
          Secretary of State Filing Date
        </label>
        <input
          type="date"
          id="sosFilingDate"
          value={data.sosFilingDate}
          onChange={(e) => updateData({ sosFilingDate: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <p className="text-gray-600 mt-1">
          Date you filed your Articles of Organization/Incorporation
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="annualReport"
            checked={data.annualReportRequired}
            onChange={(e) => updateData({ annualReportRequired: e.target.checked })}
            className="mt-1 w-5 h-5 text-red-600"
          />
          <div className="flex-1">
            <label htmlFor="annualReport" className="text-gray-700">
              Annual Report/Statement of Information Required
            </label>
            <p className="text-gray-600">
              Most states require annual or biennial reports. Check your state&apos;s requirements.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="salesTax"
            checked={data.salesTaxPermit}
            onChange={(e) => updateData({ salesTaxPermit: e.target.checked })}
            className="mt-1 w-5 h-5 text-red-600"
          />
          <div className="flex-1">
            <label htmlFor="salesTax" className="text-gray-700">
              Sales Tax Permit Obtained
            </label>
            <p className="text-gray-600">
              Required if you sell taxable goods or services. Register with your state&apos;s Department of Revenue.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="mb-3">Secretary of State Compliance</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Annual/Biennial Report filed on time</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Franchise tax paid (if applicable)</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Business address kept current with state</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Registered agent information current</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Good standing certificate obtained (if needed)</label>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="mb-3">Department of Revenue Compliance</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Sales tax permit obtained (if selling taxable goods/services)</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Sales tax filing frequency determined (monthly, quarterly, annual)</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Use tax compliance understood</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Payroll tax registration (if hiring employees)</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Unemployment insurance registration (if hiring employees)</label>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h4 className="text-amber-900 mb-2">State-Specific Considerations:</h4>
        <ul className="text-amber-800 space-y-1 list-disc list-inside">
          <li>Annual report fees vary by state ($0-$800+)</li>
          <li>Due dates are often based on formation date or fiscal year</li>
          <li>Some states require Business Licenses or Operating Permits</li>
          <li>Professional licenses may be needed for certain industries</li>
          <li>Check local city/county requirements for additional permits</li>
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800">
          <span>💡 Tip:</span> Set calendar reminders for all filing deadlines. Missing deadlines can result in penalties, late fees, or administrative dissolution of your business.
        </p>
      </div>
    </div>
  );
}
