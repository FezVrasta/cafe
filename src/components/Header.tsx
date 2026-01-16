import { motion } from 'framer-motion';
import { Coffee, Github, ExternalLink, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const SectionLink = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <button
    onClick={() => scrollToSection(id)}
    className="hover:text-foreground transition-colors"
  >
    {children}
  </button>
);

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDocsPage = location.pathname.includes('/docs');

  const handleGetStarted = () => {
    if (isDocsPage) {
      navigate('/');
      setTimeout(() => scrollToSection('install'), 100);
    } else {
      scrollToSection('install');
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Coffee className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold tracking-tight">C.A.F.E.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {isDocsPage ? (
            <>
              <SectionLink id="overview">Overview</SectionLink>
              <SectionLink id="installation">Install</SectionLink>
              <SectionLink id="faq">FAQ</SectionLink>
            </>
          ) : (
            <>
              <SectionLink id="features">Features</SectionLink>
              <SectionLink id="install">Install</SectionLink>
              <SectionLink id="how-it-works">How It Works</SectionLink>
            </>
          )}
          <Link to="/docs" className="hover:text-foreground transition-colors flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            Docs
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com/FezVrasta/cafe-hass" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button size="sm" onClick={handleGetStarted}>
            Get Started
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
