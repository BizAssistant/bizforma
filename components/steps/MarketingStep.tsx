import { Megaphone } from 'lucide-react';

interface MarketingStepProps {
  data: {
    strategy: string;
    channels: string;
    budget: string;
  };
  updateData: (data: any) => void;
}

export function MarketingStep({ data, updateData }: MarketingStepProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
          <Megaphone className="w-6 h-6 text-pink-600" />
        </div>
        <div>
          <h2>Marketing Strategy</h2>
          <p className="text-gray-600">Plan how you&apos;ll attract and retain customers</p>
        </div>
      </div>

      <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
        <h3 className="text-pink-900 mb-2">Why Marketing Matters</h3>
        <p className="text-pink-800">
          Even the best products need marketing. A solid marketing strategy helps you reach your target audience, build brand awareness, and drive sales from day one.
        </p>
      </div>

      <div>
        <label htmlFor="strategy" className="block text-gray-700 mb-2">
          Marketing Strategy Overview
        </label>
        <textarea
          id="strategy"
          rows={4}
          value={data.strategy}
          onChange={(e) => updateData({ strategy: e.target.value })}
          placeholder="Describe your overall marketing approach, target audience, and key messages..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div>
        <label htmlFor="channels" className="block text-gray-700 mb-2">
          Marketing Channels
        </label>
        <textarea
          id="channels"
          rows={4}
          value={data.channels}
          onChange={(e) => updateData({ channels: e.target.value })}
          placeholder="List the marketing channels you'll use: social media, email, SEO, paid ads, content marketing, etc."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div>
        <label htmlFor="budget" className="block text-gray-700 mb-2">
          Marketing Budget
        </label>
        <input
          type="text"
          id="budget"
          value={data.budget}
          onChange={(e) => updateData({ budget: e.target.value })}
          placeholder="e.g., $500/month or 10% of revenue"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="mb-3">Digital Marketing Channels</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <h4 className="text-gray-900">Social Media</h4>
              <p className="text-gray-700">Facebook, Instagram, LinkedIn, Twitter, TikTok</p>
            </div>
            <div>
              <h4 className="text-gray-900">Content Marketing</h4>
              <p className="text-gray-700">Blog posts, videos, podcasts, infographics</p>
            </div>
            <div>
              <h4 className="text-gray-900">Email Marketing</h4>
              <p className="text-gray-700">Newsletters, automated campaigns, promotions</p>
            </div>
            <div>
              <h4 className="text-gray-900">SEO</h4>
              <p className="text-gray-700">Optimize website for search engines</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <h4 className="text-gray-900">Paid Advertising</h4>
              <p className="text-gray-700">Google Ads, Facebook Ads, LinkedIn Ads</p>
            </div>
            <div>
              <h4 className="text-gray-900">Influencer Marketing</h4>
              <p className="text-gray-700">Partner with influencers in your niche</p>
            </div>
            <div>
              <h4 className="text-gray-900">Referral Programs</h4>
              <p className="text-gray-700">Incentivize customers to refer others</p>
            </div>
            <div>
              <h4 className="text-gray-900">Local Marketing</h4>
              <p className="text-gray-700">Google My Business, local directories, events</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="mb-3">Marketing Launch Checklist</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Brand identity created (logo, colors, fonts)</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Social media profiles set up and optimized</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Google My Business listing created</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Email marketing platform chosen (Mailchimp, ConvertKit, etc.)</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Website optimized for SEO</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Analytics tracking set up (Google Analytics, etc.)</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Content calendar created</label>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h4 className="text-amber-900 mb-2">Popular Marketing Tools:</h4>
        <div className="grid md:grid-cols-2 gap-2 text-amber-800">
          <div>
            <h5>Social Media Management</h5>
            <ul className="list-disc list-inside">
              <li>Hootsuite</li>
              <li>Buffer</li>
              <li>Later</li>
            </ul>
          </div>
          <div>
            <h5>Email Marketing</h5>
            <ul className="list-disc list-inside">
              <li>Mailchimp</li>
              <li>ConvertKit</li>
              <li>ActiveCampaign</li>
            </ul>
          </div>
          <div>
            <h5>Design Tools</h5>
            <ul className="list-disc list-inside">
              <li>Canva</li>
              <li>Adobe Creative Suite</li>
              <li>Figma</li>
            </ul>
          </div>
          <div>
            <h5>Analytics</h5>
            <ul className="list-disc list-inside">
              <li>Google Analytics</li>
              <li>Hotjar</li>
              <li>Mixpanel</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800">
          <span>💡 Tip:</span> Start with 2-3 marketing channels and master them before expanding. Focus on where your target customers spend their time.
        </p>
      </div>
    </div>
  );
}
