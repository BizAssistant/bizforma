import { Tag, Search } from 'lucide-react';
import { useState } from 'react';

interface NameSelectionStepProps {
  data: {
    businessName: string;
    alternateNames: string;
    domainAvailable: boolean;
  };
  updateData: (data: any) => void;
}

export function NameSelectionStep({ data, updateData }: NameSelectionStepProps) {
  const [checking, setChecking] = useState(false);

  const checkDomain = () => {
    setChecking(true);
    setTimeout(() => {
      setChecking(false);
      updateData({ domainAvailable: true });
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Header with glass icon */}
      <div className="flex items-center gap-3 mb-6">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div className="relative w-12 h-12 rounded-2xl backdrop-blur-md bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
            <Tag className="w-6 h-6 text-purple-300 relative z-10" />
          </div>
        </div>
        <div>
          <h2 className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">Business Name Selection</h2>
          <p className="text-gray-400">Choose a memorable and available business name</p>
        </div>
      </div>

      <div>
        <label htmlFor="businessName" className="block text-gray-300 mb-2">
          Proposed Business Name
        </label>
        <div className="relative group">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-lg opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity"></div>
          <input
            type="text"
            id="businessName"
            value={data.businessName}
            onChange={(e) => updateData({ businessName: e.target.value })}
            placeholder="Enter your business name"
            className="relative w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400/50 transition-all text-black placeholder:text-gray-500"
            style={{
              boxShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)'
            }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="alternateNames" className="block text-gray-300 mb-2">
          Alternate Names (backup options)
        </label>
        <div className="relative group">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-lg opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity"></div>
          <textarea
            id="alternateNames"
            rows={3}
            value={data.alternateNames}
            onChange={(e) => updateData({ alternateNames: e.target.value })}
            placeholder="List 2-3 backup names in case your first choice isn't available..."
            className="relative w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400/50 transition-all text-black placeholder:text-gray-500"
            style={{
              boxShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)'
            }}
          />
        </div>
      </div>

      {/* Checklist with glass effect */}
      <div className="relative">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-lg blur-sm"></div>
        <div className="relative backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-lg p-4 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <h3 className="mb-3 text-gray-200">Name Availability Checklist</h3>
          <div className="space-y-2 text-gray-300">
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 accent-purple-500" />
              <label>Checked Secretary of State business name database</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 accent-purple-500" />
              <label>Searched USPTO trademark database (TESS)</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 accent-purple-500" />
              <label>Verified domain name availability</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 accent-purple-500" />
              <label>Checked social media handles availability</label>
            </div>
          </div>
        </div>
      </div>

      {/* Tip box */}
      <div className="relative group">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-lg opacity-75 blur-sm"></div>
        <div className="relative backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-lg p-4 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
          <p className="text-purple-200/90 flex items-start gap-2">
            <span className="text-lg">💡</span>
            <span>
              <span className="text-purple-300">Tip:</span> Your business name should be memorable, easy to spell, and relevant to your industry. Avoid names that are too similar to existing businesses.
            </span>
          </p>
        </div>
      </div>

      {/* Resources box */}
      <div className="relative group">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-lg opacity-75 blur-sm"></div>
        <div className="relative backdrop-blur-md bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-400/20 rounded-lg p-4 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
          <h4 className="text-amber-200 mb-2">Important Resources:</h4>
          <ul className="text-amber-200/90 space-y-1 list-disc list-inside">
            <li>Secretary of State business search</li>
            <li>USPTO Trademark Search (uspto.gov/trademarks)</li>
            <li>Domain registrars (GoDaddy, Namecheap, Google Domains)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}