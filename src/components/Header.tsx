import { motion } from 'framer-motion';
import { Coffee, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
  >
    <div className="container mx-auto flex h-16 items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <Coffee className="h-7 w-7 text-primary" />
        <span className="text-xl font-bold tracking-tight">C.A.F.E.</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        <a href="#install" className="hover:text-foreground transition-colors">Install</a>
        <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
      </nav>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" asChild>
          <a href="https://github.com/FezVrasta/cafe-hass" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </a>
        </Button>
        <Button size="sm" asChild>
          <a href="#install">
            Get Started
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </Button>
      </div>
    </div>
  </motion.header>
);
