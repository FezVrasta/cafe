import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface NodeBadgeProps {
  icon: ReactNode;
  label: string;
  variant: 'trigger' | 'condition' | 'action' | 'delay' | 'wait' | 'variables';
}

const variantStyles = {
  trigger: 'bg-node-trigger text-primary-foreground',
  condition: 'bg-node-condition text-foreground',
  action: 'bg-node-action text-primary-foreground',
  delay: 'bg-node-delay text-primary-foreground',
  wait: 'bg-node-wait text-primary-foreground',
  variables: 'bg-node-variables text-primary-foreground',
};

export const NodeBadge = ({ icon, label, variant }: NodeBadgeProps) => (
  <div className={cn(
    'inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium shadow-node',
    variantStyles[variant]
  )}>
    {icon}
    {label}
  </div>
);
