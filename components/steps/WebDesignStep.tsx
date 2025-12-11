import { Globe } from 'lucide-react';

interface WebDesignStepProps {
  data: {
    domainName: string;
    hosting: string;
    dnsProvider: string;
    emailSetup: string;
  };
  updateData: (data: any) => void;
}

export function WebDesignStep({ data, updateData }: WebDesignStepProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
          <Globe className="w-6 h-6 text-cyan-600" />
        </div>
        <div>
          <h2>Web Design & Domain</h2>
          <p className="text-gray-600">Establish your online presence with a website and domain</p>
        </div>
      </div>

      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
        <h3 className="text-cyan-900 mb-2">Your Online Foundation</h3>
        <p className="text-cyan-800">
          A professional website and custom domain are essential for credibility. Your domain name becomes your digital address and professional email.
        </p>
      </div>

      <div>
        <label htmlFor="domainName" className="block text-gray-700 mb-2">
          Domain Name
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            id="domainName"
            value={data.domainName}
            onChange={(e) => updateData({ domainName: e.target.value })}
            placeholder="yourbusiness.com"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <p className="text-gray-600 mt-1">
          Choose a domain that matches your business name. .com is most popular, but .co, .io, .net are also good options.
        </p>
      </div>

      <div>
        <label htmlFor="hosting" className="block text-gray-700 mb-2">
          Web Hosting Provider
        </label>
        <input
          type="text"
          id="hosting"
          value={data.hosting}
          onChange={(e) => updateData({ hosting: e.target.value })}
          placeholder="e.g., Shopify, Squarespace, WordPress, Webflow"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      <div>
        <label htmlFor="dnsProvider" className="block text-gray-700 mb-2">
          DNS Provider
        </label>
        <input
          type="text"
          id="dnsProvider"
          value={data.dnsProvider}
          onChange={(e) => updateData({ dnsProvider: e.target.value })}
          placeholder="e.g., Cloudflare, Google Domains, your registrar"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <p className="text-gray-600 mt-1">
          DNS (Domain Name System) connects your domain to your website. Many use Cloudflare for free CDN and security.
        </p>
      </div>

      <div>
        <label htmlFor="emailSetup" className="block text-gray-700 mb-2">
          Professional Email Setup
        </label>
        <input
          type="text"
          id="emailSetup"
          value={data.emailSetup}
          onChange={(e) => updateData({ emailSetup: e.target.value })}
          placeholder="e.g., Google Workspace, Microsoft 365, Zoho Mail"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <p className="text-gray-600 mt-1">
          Use a professional email with your domain (name@yourbusiness.com) instead of Gmail or Yahoo.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="mb-3">Domain Registrars</h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li>Namecheap (affordable, good UI)</li>
            <li>Google Domains (simple, reliable)</li>
            <li>GoDaddy (popular, many features)</li>
            <li>Hover (clean, privacy-focused)</li>
            <li>Cloudflare (free privacy, great DNS)</li>
            <li>Porkbun (cheap, modern)</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="mb-3">Website Platforms</h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li>Shopify (e-commerce)</li>
            <li>Squarespace (beautiful designs)</li>
            <li>WordPress (most flexible)</li>
            <li>Wix (beginner-friendly)</li>
            <li>Webflow (designer-friendly)</li>
            <li>Framer (modern, fast)</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="mb-3">Website Launch Checklist</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Domain purchased and registered</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>DNS configured and pointing to hosting</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>SSL certificate installed (HTTPS enabled)</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Professional email set up</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Website design completed</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Essential pages created (Home, About, Contact, Services/Products)</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Contact forms working and tested</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Mobile responsive design verified</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>Google Analytics installed</label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label>SEO basics implemented (meta tags, descriptions)</label>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h3 className="mb-3">DNS Records You Should Know</h3>
        <div className="space-y-2 text-gray-700">
          <div>
            <h4>A Record</h4>
            <p>Points your domain to an IP address (your website)</p>
          </div>
          <div>
            <h4>CNAME Record</h4>
            <p>Creates aliases (www.yourdomain.com → yourdomain.com)</p>
          </div>
          <div>
            <h4>MX Record</h4>
            <p>Routes email to your email provider</p>
          </div>
          <div>
            <h4>TXT Record</h4>
            <p>Used for verification and email authentication (SPF, DKIM)</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h4 className="text-amber-900 mb-2">Professional Email Providers:</h4>
        <ul className="text-amber-800 space-y-1 list-disc list-inside">
          <li>Google Workspace (formerly G Suite) - $6-18/user/month</li>
          <li>Microsoft 365 - $6-22/user/month</li>
          <li>Zoho Mail - Free for 5 users, paid plans from $1/user/month</li>
          <li>ProtonMail - Privacy-focused, from €5/month</li>
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800">
          <span>💡 Tip:</span> Enable WHOIS privacy protection on your domain to keep your personal information private. Most registrars offer this for free.
        </p>
      </div>
    </div>
  );
}
