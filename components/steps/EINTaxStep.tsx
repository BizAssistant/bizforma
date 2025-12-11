import { Calculator } from 'lucide-react';

interface EINTaxStepProps {
  data: {
    einApplied: boolean;
    einNumber: string;
    taxElection: string;
  };
  updateData: (data: any) => void;
}

export function EINTaxStep({ data, updateData }: EINTaxStepProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-orange-600" />
        </div>
        <div>
          <h2>EIN & Tax Setup</h2>
          <p className="text-gray-600">Obtain your Employer Identification Number and configure tax elections</p>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <h3 className="text-orange-900 mb-2">What is an EIN?</h3>
        <p className="text-orange-800">
          An Employer Identification Number (EIN) is like a Social Security number for your business. It&apos;s required for hiring employees, opening business bank accounts, and filing taxes. You can apply for free at irs.gov.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="einApplied"
          checked={data.einApplied}
          onChange={(e) => updateData({ einApplied: e.target.checked })}
          className="w-5 h-5 text-orange-600"
        />
        <label htmlFor="einApplied" className="text-gray-700">
          I have applied for or received my EIN
        </label>
      </div>

      <div>
        <label htmlFor="einNumber" className="block text-gray-700 mb-2">
          EIN Number (if received)
        </label>
        <input
          type="text"
          id="einNumber"
          value={data.einNumber}
          onChange={(e) => updateData({ einNumber: e.target.value })}
          placeholder="XX-XXXXXXX"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div>
        <label htmlFor="taxElection" className="block text-gray-700 mb-2">
          Tax Election
        </label>
        <select
          id="taxElection"
          value={data.taxElection}
          onChange={(e) => updateData({ taxElection: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select tax election...</option>
          <option value="default">Default (Pass-through for LLC, C-Corp for Corporation)</option>
          <option value="s-corp">S Corporation Election (Form 2553)</option>
          <option value="c-corp">C Corporation</option>
          <option value="partnership">Partnership</option>
          <option value="disregarded">Disregarded Entity (Single-Member LLC)</option>
        </select>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="mb-3">EIN Application Checklist</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Apply online at irs.gov (instant approval during business hours)</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Have Articles of Organization/Incorporation on hand</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Know your business structure and formation date</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Download and save EIN confirmation letter (CP 575)</label>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-blue-900 mb-2">S Corporation Election</h3>
        <p className="text-blue-800 mb-2">
          If you want your LLC to be taxed as an S Corporation, file Form 2553 with the IRS. This must be done within 2 months and 15 days after the beginning of the tax year.
        </p>
        <p className="text-blue-800">
          <span>Benefits:</span> Reduce self-employment taxes by taking a reasonable salary and distributions.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h4 className="text-amber-900 mb-2">Important Tax Deadlines:</h4>
        <ul className="text-amber-800 space-y-1 list-disc list-inside">
          <li>S-Corp Election (Form 2553): Within 2 months 15 days of tax year start</li>
          <li>Quarterly Estimated Taxes: April 15, June 15, Sept 15, Jan 15</li>
          <li>Annual Tax Return: March 15 (S-Corp/Partnership) or April 15 (C-Corp/LLC)</li>
        </ul>
      </div>
    </div>
  );
}
