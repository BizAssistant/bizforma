import { ReactNode } from 'react';

interface GlassInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  type?: 'text' | 'textarea';
  glowColor?: 'indigo' | 'purple' | 'emerald' | 'cyan' | 'pink';
}

export function GlassInput({ 
  label, 
  id, 
  value, 
  onChange, 
  placeholder, 
  rows = 3, 
  type = 'textarea',
  glowColor = 'indigo'
}: GlassInputProps) {
  const glowColors = {
    indigo: 'from-indigo-500/50 to-purple-500/50',
    purple: 'from-purple-500/50 to-cyan-500/50',
    emerald: 'from-emerald-500/50 to-teal-500/50',
    cyan: 'from-cyan-500/50 to-blue-500/50',
    pink: 'from-orange-500/50 to-red-500/50'
  };

  const borderColors = {
    indigo: 'focus:border-indigo-400/50',
    purple: 'focus:border-purple-400/50',
    emerald: 'focus:border-emerald-400/50',
    cyan: 'focus:border-cyan-400/50',
    pink: 'focus:border-orange-400/50'
  };

  return (
    <div>
      <label htmlFor={id} className="block text-gray-300 mb-2">
        {label}
      </label>
      <div className="relative group">
        <div className={`absolute -inset-[1px] bg-gradient-to-r ${glowColors[glowColor]} rounded-lg opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity`}></div>
        
        {type === 'textarea' ? (
          <textarea
            id={id}
            rows={rows}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`relative w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/10 rounded-lg focus:outline-none ${borderColors[glowColor]} transition-all text-black placeholder:text-gray-500`}
            style={{
              boxShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)'
            }}
          />
        ) : (
          <input
            type="text"
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`relative w-full px-4 py-3 backdrop-blur-md bg-white/90 border border-white/10 rounded-lg focus:outline-none ${borderColors[glowColor]} transition-all text-black placeholder:text-gray-500`}
            style={{
              boxShadow: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)'
            }}
          />
        )}
      </div>
    </div>
  );
}

interface GlassCardProps {
  children: ReactNode;
  glowFrom: string;
  glowTo: string;
  bgFrom: string;
  bgTo: string;
  borderColor: string;
}

export function GlassCard({ children, glowFrom, glowTo, bgFrom, bgTo, borderColor }: GlassCardProps) {
  return (
    <div className="relative group">
      <div className={`absolute -inset-[1px] bg-gradient-to-r from-${glowFrom}/30 to-${glowTo}/30 rounded-lg opacity-75 blur-sm`}></div>
      <div className={`relative backdrop-blur-md bg-gradient-to-br from-${bgFrom}/10 to-${bgTo}/10 border border-${borderColor}/20 rounded-lg p-4 overflow-hidden`}>
        <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${borderColor}/50 to-transparent`}></div>
        {children}
      </div>
    </div>
  );
}

interface GlassIconHeaderProps {
  icon: ReactNode;
  title: string;
  description: string;
  glowFrom: string;
  glowTo: string;
  bgFrom: string;
  bgTo: string;
  iconColor: string;
}

export function GlassIconHeader({ icon, title, description, glowFrom, glowTo, bgFrom, bgTo, iconColor }: GlassIconHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="relative group">
        <div className={`absolute inset-0 bg-gradient-to-r from-${glowFrom} to-${glowTo} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
        <div className={`relative w-12 h-12 rounded-2xl backdrop-blur-md bg-gradient-to-br from-${bgFrom}/20 to-${bgTo}/20 flex items-center justify-center border border-white/10 overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
          <div className={`text-${iconColor} relative z-10`}>{icon}</div>
        </div>
      </div>
      <div>
        <h2 className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}