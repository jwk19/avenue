import { ReactNode } from 'react';

interface StatProps {
  value: string | number;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export function Stat({ value, label, icon, className = '' }: StatProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center">
        {icon && <span className="mr-2">{icon}</span>}
        {typeof value === 'number' ? (
          <span className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {value}+
          </span>
        ) : (
          <span className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {value}
          </span>
        )}
      </div>
      <p className="text-lg text-gray-600">{label}</p>
    </div>
  );
}

interface StatsGridProps {
  stats: Array<{
    value: string | number;
    label: string;
    icon?: ReactNode;
  }>;
  className?: string;
}

export function StatsGrid({ stats, className = '' }: StatsGridProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-${stats.length} gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <Stat
          key={index}
          value={stat.value}
          label={stat.label}
          icon={stat.icon}
          className={index < stats.length - 1 ? 'border-r border-gray-200' : ''}
        />
      ))}
    </div>
  );
}
