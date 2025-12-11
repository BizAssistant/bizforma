import { Lightbulb } from 'lucide-react';

interface ConceptStepProps {
  data: {
    businessIdea: string;
    targetMarket: string;
    products: string;
    uniqueValue: string;
  };
  updateData: (data: any) => void;
}

export function ConceptStep({ data, updateData }: ConceptStepProps) {
  return (
    <div className="space-y-6">
      {/* Header with glass icon */}
      <div className="flex items-center gap-3 mb-6">
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          
          {/* Icon container with glass effect */}
          <div className="relative w-12 h-12 rounded-2xl backdrop-blur-md bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 overflow-hidden">
            {/* Metallic shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
            <Lightbulb className="w-6 h-6 text-indigo-300 relative z-10" />
          </div>
        </div>
        <div>
          <h2 className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">Business Concept</h2>
          <p className="text-gray-400">Define your business idea and value proposition</p>
        </div>
      </div>

      {/* Form fields with glass inputs */}
      <div>
        <label htmlFor="businessIdea" className="block text-gray-300 mb-2">
          What is your business idea?
        </label>
        <div className="relative group">
          {/* Glow on focus */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500/50 to-purple-500/50 rounded-lg opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity"></div>
          
          <textarea
            id="businessIdea"
            rows={4}
            value={data.businessIdea}
            onChange={(e) => updateData({ businessIdea: e.target.value })}
            placeholder="Describe your business concept in detail..."
            className="relative w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-400/50 transition-all text-black placeholder:text-gray-500"
            style={{
              boxShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)'
            }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="targetMarket" className="block text-gray-300 mb-2">
          Who is your target market?
        </label>
        <div className="relative group">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500/50 to-purple-500/50 rounded-lg opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity"></div>
          
          <textarea
            id="targetMarket"
            rows={4}
            value={data.targetMarket}
            onChange={(e) => updateData({ targetMarket: e.target.value })}
            placeholder="Describe your ideal customers, demographics, and market size..."
            className="relative w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-400/50 transition-all text-black placeholder:text-gray-500"
            style={{
              boxShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)'
            }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="products" className="block text-gray-300 mb-2">
          What products or services will you offer?
        </label>
        <div className="relative group">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500/50 to-purple-500/50 rounded-lg opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity"></div>
          
          <textarea
            id="products"
            rows={4}
            value={data.products}
            onChange={(e) => updateData({ products: e.target.value })}
            placeholder="List your main products or services..."
            className="relative w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-400/50 transition-all text-black placeholder:text-gray-500"
            style={{
              boxShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)'
            }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="uniqueValue" className="block text-gray-300 mb-2">
          What makes your business unique?
        </label>
        <div className="relative group">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500/50 to-purple-500/50 rounded-lg opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity"></div>
          
          <textarea
            id="uniqueValue"
            rows={4}
            value={data.uniqueValue}
            onChange={(e) => updateData({ uniqueValue: e.target.value })}
            placeholder="Explain your competitive advantage and unique value proposition..."
            className="relative w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-400/50 transition-all text-black placeholder:text-gray-500"
            style={{
              boxShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)'
            }}
          />
        </div>
      </div>

      {/* Tip box with glass effect */}
      <div className="relative group mt-6">
        {/* Glow effect */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 rounded-lg opacity-75 blur-sm"></div>
        
        <div className="relative backdrop-blur-md bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-400/20 rounded-lg p-4 overflow-hidden">
          {/* Metallic accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
          
          <p className="text-cyan-200/90 flex items-start gap-2">
            <span className="text-lg">💡</span>
            <span>
              <span className="text-cyan-300">Tip:</span> A clear business concept helps guide all future decisions. Take time to refine your idea before moving forward.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}