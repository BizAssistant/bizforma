import { FileText } from 'lucide-react';
import { GlassInput } from '../GlassComponents';

interface RegistrationStepProps {
  data: {
    registeredAgent: string;
    businessAddress: string;
    mailingAddress: string;
  };
  updateData: (data: any) => void;
}

export function RegistrationStep({ data, updateData }: RegistrationStepProps) {
  return (
    <div className="space-y-6">
      {/* Header with glass icon */}
      <div className="flex items-center gap-3 mb-6">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div className="relative w-12 h-12 rounded-2xl backdrop-blur-md bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
            <FileText className="w-6 h-6 text-indigo-300 relative z-10" />
          </div>
        </div>
        <div>
          <h2 className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">Business Registration</h2>
          <p className="text-gray-400">Register your business with the state</p>
        </div>
      </div>

      {/* Process overview box */}
      <div className="relative">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500/30 to-blue-500/30 rounded-lg opacity-75 blur-sm"></div>
        <div className="relative backdrop-blur-md bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-400/20 rounded-lg p-4 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent"></div>
          <h3 className="text-indigo-200 mb-2">Registration Process Overview</h3>
          <ol className="text-indigo-200/90 space-y-2 list-decimal list-inside">
            <li>File Articles of Organization/Incorporation with Secretary of State</li>
            <li>Appoint a Registered Agent</li>
            <li>Create an Operating Agreement (LLC) or Bylaws (Corporation)</li>
            <li>Obtain an EIN from the IRS (covered in next step)</li>
            <li>Register for state taxes if applicable</li>
          </ol>
        </div>
      </div>

      <div>
        <label htmlFor="registeredAgent" className="block text-gray-300 mb-2">
          Registered Agent
        </label>
        <div className="relative group">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500/50 to-blue-500/50 rounded-lg opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity"></div>
          <input
            type="text"
            id="registeredAgent"
            value={data.registeredAgent}
            onChange={(e) => updateData({ registeredAgent: e.target.value })}
            placeholder="Name of person or registered agent service"
            className="relative w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-400/50 transition-all text-black placeholder:text-gray-500"
            style={{
              boxShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)'
            }}
          />
        </div>
        <p className="text-gray-400 mt-1 text-sm">
          A registered agent receives legal documents on behalf of your business. Must have a physical address in the state of formation.
        </p>
      </div>

      <GlassInput
        label="Principal Business Address"
        id="businessAddress"
        value={data.businessAddress}
        onChange={(value) => updateData({ businessAddress: value })}
        placeholder="Street address, city, state, ZIP code"
        glowColor="indigo"
      />

      <GlassInput
        label="Mailing Address (if different)"
        id="mailingAddress"
        value={data.mailingAddress}
        onChange={(value) => updateData({ mailingAddress: value })}
        placeholder="Street address, city, state, ZIP code"
        glowColor="indigo"
      />

      {/* Checklist */}
      <div className="relative">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-lg blur-sm"></div>
        <div className="relative backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-lg p-4 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <h3 className="mb-3 text-gray-200">Required Documents Checklist</h3>
          <div className="space-y-2 text-gray-300">
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 accent-indigo-500" />
              <label>Articles of Organization/Incorporation filed</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 accent-indigo-500" />
              <label>Filing fee paid (varies by state, typically $50-$500)</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 accent-indigo-500" />
              <label>Operating Agreement/Bylaws created</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 accent-indigo-500" />
              <label>Registered Agent appointed</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 accent-indigo-500" />
              <label>Certificate of Formation received from state</label>
            </div>
          </div>
        </div>
      </div>

      {/* Resources box */}
      <div className="relative group">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-lg opacity-75 blur-sm"></div>
        <div className="relative backdrop-blur-md bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-400/20 rounded-lg p-4 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
          <h4 className="text-amber-200 mb-2">Popular Registered Agent Services:</h4>
          <ul className="text-amber-200/90 space-y-1 list-disc list-inside">
            <li>Northwest Registered Agent</li>
            <li>Incfile/BizFilings</li>
            <li>ZenBusiness</li>
            <li>LegalZoom</li>
            <li>Or appoint yourself/an employee (must maintain physical address during business hours)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}