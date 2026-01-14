import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface InstallStepProps {
  number: number;
  title: string;
  description: string;
  code?: string;
  delay?: number;
}

export const InstallStep = ({ number, title, description, code, delay = 0 }: InstallStepProps) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex gap-4"
  >
    <div className="flex-shrink-0">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
        {number}
      </div>
    </div>
    <div className="flex-1 pb-8 border-l border-border/50 pl-6 -ml-5 last:border-0 last:pb-0">
      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      {code && (
        <code className="block rounded-lg bg-secondary/80 px-4 py-3 text-sm font-mono text-accent overflow-x-auto">
          {code}
        </code>
      )}
    </div>
  </motion.div>
);
