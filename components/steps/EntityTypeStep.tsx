import { Building2, ChevronDown } from 'lucide-react';

interface EntityTypeStepProps {
  data: {
    type: string;
    state: string;
    owners: string;
  };
  updateData: (data: any) => void;
}

const entityTypes = [
  {
    value: 'LLC',
    label: 'Limited Liability Company (LLC)',
    description: 'Most popular for small businesses. Flexible, pass-through taxation, liability protection.',
    pros: ['Personal liability protection', 'Flexible management', 'Pass-through taxation', 'Easier to set up than corporation'],
    cons: ['Self-employment taxes on all income', 'Limited life in some states']
  },
  {
    value: 'S-Corp',
    label: 'S Corporation',
    description: 'Good for reducing self-employment taxes. Limited to 100 shareholders, must be US citizens.',
    pros: ['Reduced self-employment taxes', 'Pass-through taxation', 'Credibility with investors'],
    cons: ['Strict IRS requirements', 'More complex than LLC', 'Limited to 100 shareholders', 'More expensive to maintain']
  },
  {
    value: 'C-Corp',
    label: 'C Corporation',
    description: 'Best for businesses seeking venture capital or planning to go public.',
    pros: ['Unlimited shareholders', 'Easier to raise capital', 'Stock options for employees', 'No restrictions on ownership'],
    cons: ['Double taxation', 'Complex regulations', 'Expensive to maintain', 'More paperwork']
  },
  {
    value: 'Sole-Proprietorship',
    label: 'Sole Proprietorship',
    description: 'Simplest form. No separation between owner and business.',
    pros: ['Easy to set up', 'Complete control', 'Minimal paperwork', 'Pass-through taxation'],
    cons: ['No liability protection', 'Harder to raise capital', 'Business dies with owner']
  },
  {
    value: 'Partnership',
    label: 'Partnership (General or Limited)',
    description: 'Two or more people share ownership. Can be general or limited partnership.',
    pros: ['Easy to establish', 'Shared financial commitment', 'Pass-through taxation'],
    cons: ['Personal liability (in general partnership)', 'Potential for disputes', 'Joint and several liability']
  }
];

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

export function EntityTypeStep({ data, updateData }: EntityTypeStepProps) {
  const selectedEntity = entityTypes.find(e => e.value === data.type);

  return (
    <div className="space-y-6">
      {/* Header with glass icon */}
      <div className="flex items-center gap-3 mb-6">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div className="relative w-12 h-12 rounded-2xl backdrop-blur-md bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
            <Building2 className="w-6 h-6 text-emerald-300 relative z-10" />
          </div>
        </div>
        <div>
          <h2 className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">Business Entity Type</h2>
          <p className="text-gray-400">Choose the right legal structure for your business</p>
        </div>
      </div>

      <div>
        <label htmlFor="entityType" className="block text-gray-300 mb-2">
          Select Entity Type
        </label>
        <div className="relative group">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/50 to-teal-500/50 rounded-lg opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity"></div>
          <div className="relative">
            <select
              id="entityType"
              value={data.type}
              onChange={(e) => updateData({ type: e.target.value })}
              className="w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-400/50 appearance-none text-black"
              style={{
                boxShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)'
              }}
            >
              <option value="" className="bg-gray-900">Choose an entity type...</option>
              {entityTypes.map(entity => (
                <option key={entity.value} value={entity.value} className="bg-gray-900">{entity.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {selectedEntity && (
        <div className="relative">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-lg opacity-75 blur-sm"></div>
          <div className="relative backdrop-blur-md bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-400/20 rounded-lg p-4 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
            <h3 className="text-emerald-200 mb-2">{selectedEntity.label}</h3>
            <p className="text-emerald-200/80 mb-4">{selectedEntity.description}</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-emerald-300 mb-2">Pros:</h4>
                <ul className="text-emerald-200/90 space-y-1">
                  {selectedEntity.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-emerald-300 mb-2">Cons:</h4>
                <ul className="text-emerald-200/90 space-y-1">
                  {selectedEntity.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-400 mt-1">✗</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="state" className="block text-gray-300 mb-2">
            State of Formation
          </label>
          <div className="relative group">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/50 to-teal-500/50 rounded-lg opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity"></div>
            <div className="relative">
              <select
                id="state"
                value={data.state}
                onChange={(e) => updateData({ state: e.target.value })}
                className="w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-400/50 appearance-none text-black"
                style={{
                  boxShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)'
                }}
              >
                <option value="" className="bg-gray-900">Select state...</option>
                {states.map(state => (
                  <option key={state} value={state} className="bg-gray-900">{state}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="owners" className="block text-gray-300 mb-2">
            Number of Owners
          </label>
          <div className="relative group">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/50 to-teal-500/50 rounded-lg opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity"></div>
            <input
              type="text"
              id="owners"
              value={data.owners}
              onChange={(e) => updateData({ owners: e.target.value })}
              placeholder="e.g., 1, 2, 3..."
              className="relative w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-400/50 transition-all text-black placeholder:text-gray-500"
              style={{
                boxShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)'
              }}
            />
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 rounded-lg opacity-75 blur-sm"></div>
        <div className="relative backdrop-blur-md bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-400/20 rounded-lg p-4 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
          <p className="text-cyan-200/90 flex items-start gap-2">
            <span className="text-lg">💡</span>
            <span>
              <span className="text-cyan-300">Tip:</span> Consult with a business attorney or CPA to determine the best entity type for your specific situation. Consider factors like liability protection, tax implications, and future growth plans.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}