import { motion } from 'framer-motion';
import {
  Coffee,
  Zap,
  GitBranch,
  Play,
  Clock,
  Variable,
  FileCode2,
  Cpu,
  RefreshCw,
  Shield,
  Download,
  Layers,
  ExternalLink,
  Github,
  Check,
  X,
  Minus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroFlow } from '@/components/HeroFlow';
import { FeatureCard } from '@/components/FeatureCard';
import { InstallStep } from '@/components/InstallStep';
import { NodeBadge } from '@/components/NodeBadge';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/10 via-primary/5 to-transparent blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6">
              <Coffee className="h-4 w-4" />
              <span>Home Assistant Integration</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-gradient">C.A.F.E.</span>
            </h1>

            <p className="text-2xl md:text-3xl font-medium text-foreground mb-4">
              Complex Automation Flow Editor
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              The "Third Way" for Home Assistant automations. Node-RED-style visual editing
              that compiles to 100% native YAML. No external engine required.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a
                  href="https://fezvrasta.github.io/cafe-hass"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Try It Now
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('install')?.scrollIntoView({ behavior: 'smooth' })}>
                <Download className="h-5 w-5 mr-2" />
                Install via HACS
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://github.com/FezVrasta/cafe-hass"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Animated Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <HeroFlow />
          </motion.div>

          {/* Node types showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-8"
          >
            <NodeBadge icon={<Zap size={16} />} label="Trigger" variant="trigger" />
            <NodeBadge icon={<GitBranch size={16} />} label="Condition" variant="condition" />
            <NodeBadge icon={<Play size={16} />} label="Action" variant="action" />
            <NodeBadge icon={<Clock size={16} />} label="Delay" variant="delay" />
            <NodeBadge icon={<Variable size={16} />} label="Variables" variant="variables" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-border/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose C.A.F.E.?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combine the stability of native YAML with the clarity of visual flow editing.
              No compromises, no external dependencies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<FileCode2 size={24} />}
              title="Native YAML Output"
              description="Everything compiles to 100% Home Assistant native YAML. No proprietary formats, no side files, no lock-in."
              delay={0}
            />
            <FeatureCard
              icon={<Cpu size={24} />}
              title="Zero Overhead"
              description="No secondary engine, no extra Docker containers, no background resource consumption. Logic runs directly in HA Core."
              delay={0.1}
            />
            <FeatureCard
              icon={<Layers size={24} />}
              title="Complex Logic"
              description="Cross-branching, loops, and state-based logic through our proprietary State-Machine Transpiler."
              delay={0.2}
            />
            <FeatureCard
              icon={<RefreshCw size={24} />}
              title="Round-Trip Editing"
              description="Import any existing automation. C.A.F.E. parses YAML and auto-layouts nodes for instant visualization."
              delay={0.3}
            />
            <FeatureCard
              icon={<Shield size={24} />}
              title="No Vendor Lock-In"
              description="Uninstall anytime—your automations keep working. Visual metadata is stored harmlessly in variables."
              delay={0.4}
            />
            <FeatureCard
              icon={<Zap size={24} />}
              title="Trace-Integrated"
              description="Debug visual flows using HA's official Trace View. CAFE maps execution paths back to your canvas."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 border-t border-border/30 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The State-Machine Transpiler
              </h2>
              <p className="text-muted-foreground mb-6">
                Draw complex flows with loops and branches. C.A.F.E. compiles them into
                a native state machine using a <code className="text-accent">repeat</code> loop
                and <code className="text-accent">choose</code> dispatcher.
              </p>
              <p className="text-muted-foreground">
                Your "spaghetti" logic becomes clean, efficient, 100% native execution.
                Compatible with Home Assistant's built-in editor too.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border/50 bg-secondary/30 p-6 font-mono text-sm overflow-x-auto"
            >
              <pre className="text-muted-foreground">
                <code>{`# What CAFE generates under the hood
variables:
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="compare" className="py-20 border-t border-border/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Does C.A.F.E. Compare?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how C.A.F.E. stacks up against other Home Assistant automation solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground">
                    <div className="flex flex-col items-center gap-1">
                      <span>Built-In Editor</span>
                      <span className="text-xs font-normal opacity-70">Home Assistant</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground">
                    <div className="flex flex-col items-center gap-1">
                      <span>Node-RED</span>
                      <span className="text-xs font-normal opacity-70">Add-on</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">
                    <div className="flex flex-col items-center gap-1">
                      <Coffee className="h-5 w-5" />
                      <span>C.A.F.E.</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <ComparisonRow
                  feature="Visual Flow Editing"
                  builtin={false}
                  nodeRed={true}
                  cafe={true}
                />
                <ComparisonRow
                  feature="Native YAML Output"
                  builtin={true}
                  nodeRed={false}
                  cafe={true}
                />
                <ComparisonRow
                  feature="No External Engine Required"
                  builtin={true}
                  nodeRed={false}
                  cafe={true}
                />
                <ComparisonRow
                  feature="Complex Loops & Branches"
                  builtin="partial"
                  nodeRed={true}
                  cafe={true}
                />
                <ComparisonRow
                  feature="Cross-Branch Connections"
                  builtin={false}
                  nodeRed={true}
                  cafe={true}
                />
                <ComparisonRow
                  feature="Import Existing Automations"
                  builtin={true}
                  nodeRed={false}
                  cafe={true}
                />
                <ComparisonRow
                  feature="Zero Resource Overhead"
                  builtin={true}
                  nodeRed={false}
                  cafe={true}
                />
                <ComparisonRow
                  feature="Works After Uninstall"
                  builtin={true}
                  nodeRed={false}
                  cafe={true}
                />
                <ComparisonRow
                  feature="HA Trace View Integration"
                  builtin={true}
                  nodeRed={false}
                  cafe={true}
                />
                <ComparisonRow
                  feature="JavaScript/Custom Functions"
                  builtin={false}
                  nodeRed={true}
                  cafe={false}
                />
              </tbody>
            </table>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs text-muted-foreground mt-6 max-w-2xl mx-auto"
          >
            Node-RED excels for advanced users who need JavaScript and custom integrations. 
            C.A.F.E. is ideal for those who want visual editing with native HA compatibility.
          </motion.p>
        </div>
      </section>

      {/* Installation Section */}
      <section id="install" className="py-20 border-t border-border/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Install C.A.F.E. via HACS and start creating visual automations today.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <InstallStep
              number={1}
              title="Add Custom Repository in HACS"
              description="Open HACS → ⋮ Menu → Custom repositories"
              code="https://github.com/FezVrasta/cafe-hass"
              delay={0}
            />
            <InstallStep
              number={2}
              title="Set Category to Integration"
              description="Important: Select 'Integration' as the category type, then click Add."
              delay={0.1}
            />
            <InstallStep
              number={3}
              title="Install C.A.F.E."
              description="Search for C.A.F.E. in HACS Integrations and click Download."
              delay={0.2}
            />
            <InstallStep
              number={4}
              title="Restart Home Assistant"
              description="Restart your HA instance for the integration to load."
              delay={0.3}
            />
            <InstallStep
              number={5}
              title="Enable the Integration"
              description="Go to Settings → Devices & Services → Add Integration → Search for C.A.F.E."
              delay={0.4}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button size="lg" asChild>
              <a
                href="https://github.com/FezVrasta/cafe-hass"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Full Documentation on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Beta Warning Banner */}
      <section className="py-8 border-t border-primary/30 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">⚠️ Beta Software:</span> Please backup your automations before editing with CAFE.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ComparisonRow = ({
  feature,
  builtin,
  nodeRed,
  cafe,
}: {
  feature: string;
  builtin: boolean | 'partial';
  nodeRed: boolean | 'partial';
  cafe: boolean | 'partial';
}) => {
  const renderCell = (value: boolean | 'partial') => {
    if (value === true) {
      return <Check className="h-5 w-5 text-node-action mx-auto" />;
    }
    if (value === 'partial') {
      return <Minus className="h-5 w-5 text-node-trigger mx-auto" />;
    }
    return <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />;
  };

  return (
    <tr className="border-b border-border/30 hover:bg-card/50 transition-colors">
      <td className="py-3 px-4 text-foreground">{feature}</td>
      <td className="py-3 px-4 text-center">{renderCell(builtin)}</td>
      <td className="py-3 px-4 text-center">{renderCell(nodeRed)}</td>
      <td className="py-3 px-4 text-center bg-primary/5">{renderCell(cafe)}</td>
    </tr>
  );
};

export default Index;
