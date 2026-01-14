import { Coffee, Github, Heart } from 'lucide-react';

export const Footer = () => (
  <footer className="border-t border-border/50 bg-card/30">
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Coffee className="h-6 w-6 text-primary" />
          <span className="font-semibold">C.A.F.E.</span>
          <span className="text-sm text-muted-foreground">Complex Automation Flow Editor</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a
            href="https://github.com/FezVrasta/cafe-hass"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <span className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in Italy
          </span>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
        <p>MIT License • Your automations belong to you and Home Assistant, not to C.A.F.E.</p>
      </div>
    </div>
  </footer>
);
