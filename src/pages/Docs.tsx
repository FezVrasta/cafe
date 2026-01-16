import { motion } from 'framer-motion';
import {
  Coffee,
  AlertTriangle,
  Zap,
  Shield,
  Cpu,
  Layers,
  FileCode2,
  RefreshCw,
  Variable,
  ChevronRight,
  ExternalLink,
  Youtube,
  Download,
  HelpCircle,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Docs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-primary/10 via-primary/5 to-transparent blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6">
              <Coffee className="h-4 w-4" />
              <span>Documentation</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              C.A.F.E. Documentation
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              Everything you need to know about the Complex Automation Flow Editor for Home Assistant.
            </p>

            {/* Beta Warning */}
            <div className="flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4 mb-8">
              <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Beta Software</p>
                <p className="text-sm text-muted-foreground">
                  The project is still in beta. While it is designed to be non-destructive, please make sure to backup your automations before editing them with C.A.F.E.!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <TocLink href="#overview" icon={<Coffee size={18} />} title="Overview" />
              <TocLink href="#why-cafe" icon={<Zap size={18} />} title="Why C.A.F.E.?" />
              <TocLink href="#no-lock-in" icon={<Shield size={18} />} title="No Vendor Lock-In" />
              <TocLink href="#architecture" icon={<Cpu size={18} />} title="Architecture" />
              <TocLink href="#features" icon={<Layers size={18} />} title="Power Features" />
              <TocLink href="#installation" icon={<Download size={18} />} title="Installation" />
              <TocLink href="#faq" icon={<HelpCircle size={18} />} title="FAQ" />
            </nav>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-12 border-t border-border/30 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border/50 bg-secondary/30 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Youtube className="h-6 w-6 text-destructive" />
                <h2 className="text-xl font-bold">Featured Review</h2>
              </div>
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "THIS Home Assistant Automation Integration Is Absolutely INCREDIBLE!"
              </blockquote>
              <p className="text-sm text-muted-foreground mb-4">— Byte of Geek</p>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://www.youtube.com/watch?v=9PVBo0CtHz0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="h-4 w-4 mr-2" />
                  Watch the Review
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-16 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <DocSection title="Overview" icon={<Coffee size={24} />}>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">C.A.F.E.</strong> (Complex Automation Flow Editor) is a visual flow editor that brings Node-RED-style power to Home Assistant <strong className="text-foreground">without the external engine</strong>.
              </p>
              <p className="text-muted-foreground mb-4">
                It transpiles your visual diagrams into 100% compliant, native Home Assistant logic stored directly in the core system.
              </p>
              <p className="text-muted-foreground">
                Think of it as the "Third Way" for Home Assistant: Visual Logic with 0% Overhead.
              </p>
            </DocSection>
          </div>
        </div>
      </section>

      {/* Why CAFE */}
      <section id="why-cafe" className="py-16 border-t border-border/30 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <DocSection title="Why C.A.F.E.?" icon={<Zap size={24} />}>
              <p className="text-muted-foreground mb-6">
                For years, Home Assistant users had to choose: the <strong className="text-foreground">stability</strong> of native YAML or the <strong className="text-foreground">clarity</strong> of Node-RED flows. C.A.F.E. eliminates the trade-off.
              </p>

              <div className="grid gap-4">
                <FeatureItem
                  icon={<FileCode2 size={20} />}
                  title="Native YAML"
                  description="No side files, no external databases, and no proprietary formats. Everything is stored in HASS."
                />
                <FeatureItem
                  icon={<Cpu size={20} />}
                  title="Zero Overhead"
                  description="No secondary engine or extra Docker containers. Once saved, the logic runs in the HA Core with zero extra resource consumption."
                />
                <FeatureItem
                  icon={<Layers size={20} />}
                  title="Optimized YAML Generation"
                  description="C.A.F.E. produces standard, linear sequences for simple flows and automatically utilizes a robust State-Machine pattern for complex logic like loops."
                />
                <FeatureItem
                  icon={<RefreshCw size={20} />}
                  title="Trace-Integrated"
                  description="Debug your visual flows using the official Home Assistant Trace View. C.A.F.E. maps execution paths back to your canvas."
                />
              </div>
            </DocSection>
          </div>
        </div>
      </section>

      {/* No Vendor Lock-In */}
      <section id="no-lock-in" className="py-16 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <DocSection title="No Vendor Lock-In" icon={<Shield size={24} />}>
              <p className="text-muted-foreground mb-6">
                Your automations, your way. C.A.F.E. is designed with portability in mind.
              </p>

              <div className="space-y-4">
                <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
                  <h4 className="font-semibold text-foreground mb-2">Stop Using C.A.F.E. Anytime</h4>
                  <p className="text-sm text-muted-foreground">
                    If you uninstall C.A.F.E., your automations keep working exactly as before. The logic is standard YAML; you only lose the visual layout metadata.
                  </p>
                </div>

                <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
                  <h4 className="font-semibold text-foreground mb-2">Built-in Editor Compatible</h4>
                  <p className="text-sm text-muted-foreground">
                    You can switch between C.A.F.E. and the native HASS automation editor seamlessly. They edit the same source of truth.
                  </p>
                </div>

                <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
                  <h4 className="font-semibold text-foreground mb-2">Zero Side-Files</h4>
                  <p className="text-sm text-muted-foreground">
                    There is no <code className="text-accent">cafe_data.json</code>. Visual metadata (node positions, etc.) is stored as a harmless object inside the automation's <code className="text-accent">variables</code> block.
                  </p>
                </div>
              </div>
            </DocSection>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="py-16 border-t border-border/30 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <DocSection title="Engineering Quality & Architecture" icon={<Cpu size={24} />}>
              <p className="text-muted-foreground mb-6">
                C.A.F.E. is architected with strict engineering principles to ensure your home remains reliable:
              </p>

              <div className="space-y-4 mb-8">
                <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
                  <h4 className="font-semibold text-foreground mb-2">Intelligent Transpiler</h4>
                  <p className="text-sm text-muted-foreground">
                    The engine analyzes your flow and chooses the optimal target structure. It generates clean, human-readable YAML for standard sequences, and utilizes a <strong className="text-foreground">Native State Machine</strong> (repeat/choose dispatcher) only when needed to unlock complex non-linear "jumps" and loops.
                  </p>
                </div>

                <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
                  <h4 className="font-semibold text-foreground mb-2">Zod Validation</h4>
                  <p className="text-sm text-muted-foreground">
                    Every node, edge, and schema is validated via <strong className="text-foreground">Zod</strong>. This ensures that malformed UI data never reaches your Home Assistant API.
                  </p>
                </div>

                <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
                  <h4 className="font-semibold text-foreground mb-2">Heuristic Auto-Layout</h4>
                  <p className="text-sm text-muted-foreground">
                    Our engine can "read" existing, manual YAML and instantly reconstruct a visual map, making it the perfect tool for auditing and cleaning up "spaghetti" automations.
                  </p>
                </div>
              </div>

              {/* Code Example */}
              <div className="rounded-lg border border-border/50 bg-background p-4 font-mono text-sm overflow-x-auto">
                <p className="text-xs text-muted-foreground mb-3"># What CAFE generates under the hood</p>
                <pre className="text-muted-foreground">
                  <code>{`variables:
  current_node: 'START'
  _cafe_ui: { ...metadata... }
action:
  - repeat:
      while: "{{ current_node != 'EXIT' }}"
      sequence:
        - choose:
            - conditions: "{{ current_node == 'LIGHTS_ON' }}"
              sequence:
                - service: light.turn_on
                  target:
                    entity_id: light.kitchen
                - variables:
                    current_node: 'CHECK_SUN'`}</code>
                </pre>
              </div>
            </DocSection>
          </div>
        </div>
      </section>

      {/* Power Features */}
      <section id="features" className="py-16 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <DocSection title="Power Features" icon={<Layers size={24} />}>
              <div className="grid gap-4">
                <FeatureItem
                  icon={<Zap size={20} />}
                  title="Script Responses"
                  description="Full support for call_service responses. Call a script, capture its output, and use it in subsequent nodes via native Jinja templates."
                />
                <FeatureItem
                  icon={<Variable size={20} />}
                  title="Set Variables Node"
                  description="Create and update flow-scoped variables dynamically within your automation logic."
                />
                <FeatureItem
                  icon={<Cpu size={20} />}
                  title="Entity Intelligence"
                  description="Full autocomplete and state-awareness via the native HASS WebSocket API."
                />
                <FeatureItem
                  icon={<RefreshCw size={20} />}
                  title="Visual Import"
                  description="Load any native automation and see it mapped instantly to nodes."
                />
              </div>
            </DocSection>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section id="installation" className="py-16 border-t border-border/30 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <DocSection title="Installation via HACS" icon={<Download size={24} />}>
              <div className="space-y-6">
                <InstallStep
                  number={1}
                  title="Install HACS"
                  description="Ensure HACS is installed on your Home Assistant instance."
                  link="https://hacs.xyz/"
                />
                <InstallStep
                  number={2}
                  title="Add Custom Repository"
                  description="Go to HACS → Integrations → Click the ⋮ menu → Custom repositories"
                  code="https://github.com/FezVrasta/cafe-hass"
                />
                <InstallStep
                  number={3}
                  title="Select Category"
                  description="Add the repository URL and select 'Integration' as the category type."
                />
                <InstallStep
                  number={4}
                  title="Install & Restart"
                  description="Find C.A.F.E. in HACS, download it, and restart Home Assistant."
                />
                <InstallStep
                  number={5}
                  title="Enable the Integration"
                  description="Go to Settings → Devices & Services → Add Integration → Search for C.A.F.E."
                />
              </div>
            </DocSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <DocSection title="Frequently Asked Questions" icon={<HelpCircle size={24} />}>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-border/50">
                  <AccordionTrigger className="text-left hover:text-primary">
                    How do I use script responses and variables?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    When you call a script and set a <code className="text-accent">response_variable</code> (e.g., <code className="text-accent">weather_data</code>), those values become available to all subsequent nodes in the flow. You can access them using standard Home Assistant Jinja syntax in any text field:
                    <code className="block mt-2 p-2 bg-secondary/30 rounded text-sm">
                      {"The temperature is {{ weather_data.temp }} degrees."}
                    </code>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-border/50">
                  <AccordionTrigger className="text-left hover:text-primary">
                    Does C.A.F.E. slow down my Home Assistant instance?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <strong className="text-foreground">No.</strong> Unlike Node-RED, C.A.F.E. is not an execution engine; it is a specialized compiler. Once you hit "Save," the resulting logic is pure, native Home Assistant code. It consumes zero CPU or RAM in the background because the logic runs directly within the HA Core automation engine.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-border/50">
                  <AccordionTrigger className="text-left hover:text-primary">
                    Can I still use the built-in Home Assistant automation editor?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <strong className="text-foreground">Yes.</strong> C.A.F.E. and the native editor are two different "lenses" for the same data. You can open a C.A.F.E. automation in the native editor to make a quick change, and C.A.F.E. will pick up those changes (and attempt to preserve your layout) the next time you open it.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-border/50">
                  <AccordionTrigger className="text-left hover:text-primary">
                    What happens if I uninstall C.A.F.E.?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Your house keeps running. Because C.A.F.E. stores everything as native YAML, your automations are independent of the editor. You will lose the visual layout (the positions of the boxes), but the logic itself remains 100% intact and editable via YAML.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-border/50">
                  <AccordionTrigger className="text-left hover:text-primary">
                    Why does my YAML look different sometimes?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    C.A.F.E. uses an <strong className="text-foreground">Optimized Compilation</strong> strategy.
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>For <strong className="text-foreground">Linear flows</strong>, it generates standard YAML sequences.</li>
                      <li>For <strong className="text-foreground">Complex flows</strong> (with loops or jumps), it generates a <strong className="text-foreground">Native State Machine</strong>.</li>
                    </ul>
                    <p className="mt-2">Both are 100% compliant with Home Assistant; C.A.F.E. simply chooses the best structure for the job.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-border/50">
                  <AccordionTrigger className="text-left hover:text-primary">
                    Is this safe to use for "mission-critical" automations?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    While C.A.F.E. is in Beta, we recommend keeping backups. However, because it targets the native HA engine, it is inherently more stable than external engines. If the editor has a bug, it might mess up your YAML, but it can't "crash" your automation engine or cause a background memory leak.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border-border/50">
                  <AccordionTrigger className="text-left hover:text-primary">
                    What's the C.A.F.E. alternative to Node-RED's "Function" node?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You can use Jinja2 templates directly in any text field within C.A.F.E. For more complex logic, the "Set Variables" node allows you to create and manipulate flow-scoped variables dynamically. This combination provides similar flexibility to Node-RED's "Function" node while staying within the native Home Assistant framework.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </DocSection>
          </div>
        </div>
      </section>

      {/* License */}
      <section className="py-12 border-t border-border/30 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground">
              MIT License. Created by{' '}
              <a
                href="https://github.com/FezVrasta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Federico Zivolo
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Helper Components

const TocLink = ({
  href,
  icon,
  title,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
}) => (
  <a
    href={href}
    className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-4 hover:bg-card hover:border-primary/30 transition-colors group"
  >
    <span className="text-primary">{icon}</span>
    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
      {title}
    </span>
    <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
  </a>
);

const DocSection = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-3 mb-6">
      <span className="text-primary">{icon}</span>
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
    </div>
    {children}
  </motion.div>
);

const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex gap-4 rounded-lg border border-border/50 bg-secondary/20 p-4">
    <span className="text-primary flex-shrink-0">{icon}</span>
    <div>
      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const InstallStep = ({
  number,
  title,
  description,
  code,
  link,
}: {
  number: number;
  title: string;
  description: string;
  code?: string;
  link?: string;
}) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
      {number}
    </div>
    <div className="flex-1">
      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground mb-2">{description}</p>
      {code && (
        <code className="block text-sm bg-background border border-border/50 rounded px-3 py-2 font-mono text-accent">
          {code}
        </code>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1"
        >
          Learn more <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </div>
  </div>
);

export default Docs;
