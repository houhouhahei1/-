import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  onClick, 
  hoverEffect = false 
}) => {
  return (
    <div 
      onClick={onClick}
      className={`glass-panel rounded-3xl p-6 md:p-8 ${hoverEffect ? 'glass-card-hover cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

interface BadgeProps {
  children: React.ReactNode;
  color?: 'blue' | 'purple' | 'rose' | 'amber' | 'emerald';
}

export const Badge: React.FC<BadgeProps> = ({ children, color = 'blue' }) => {
  const colors = {
    blue: 'bg-blue-100/80 text-blue-700 border-blue-200',
    purple: 'bg-purple-100/80 text-purple-700 border-purple-200',
    rose: 'bg-rose-100/80 text-rose-700 border-rose-200',
    amber: 'bg-amber-100/80 text-amber-700 border-amber-200',
    emerald: 'bg-emerald-100/80 text-emerald-700 border-emerald-200',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${colors[color]}`}>
      {children}
    </span>
  );
};

export const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string }> = ({ children, subtitle }) => (
  <div className="mb-8">
    {subtitle && <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">{subtitle}</p>}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
      {children}
    </h2>
  </div>
);
