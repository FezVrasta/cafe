import { useEffect } from 'react';
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  ConnectionLineType,
  MarkerType,
  Handle,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { motion } from 'framer-motion';
import { Zap, GitBranch, Play, Clock, Variable } from 'lucide-react';

const nodeStyle = (color: string) => ({
  background: color,
  borderRadius: '12px',
  padding: '12px 16px',
  border: 'none',
  boxShadow: '0 4px 16px -4px rgba(0,0,0,0.4)',
  minWidth: '140px',
});

const CustomNode = ({ data }: { data: { label: string; icon: React.ReactNode; color: string; subLabel?: string } }) => {
  const textColor = data.color === '#FBBF24' || data.color === '#22C55E' ? '#0a0f1a' : '#fff';
  
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={nodeStyle(data.color)}
      className="relative flex items-center gap-2"
    >
      <Handle type="target" position={Position.Left} className="!bg-white/50 !border-0 !w-2 !h-2" />
      <div className="flex-shrink-0">{data.icon}</div>
      <div>
        <div className="font-semibold text-sm" style={{ color: textColor }}>
          {data.label}
        </div>
        {data.subLabel && (
          <div className="text-xs opacity-70" style={{ color: textColor }}>
            {data.subLabel}
          </div>
        )}
      </div>
      <Handle type="source" position={Position.Right} className="!bg-white/50 !border-0 !w-2 !h-2" />
    </motion.div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 50, y: 120 },
    data: {
      label: 'Motion Sensor',
      subLabel: 'binary_sensor.motion',
      icon: <Zap size={18} className="text-[#0a0f1a]" />,
      color: '#FBBF24',
    },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 280, y: 120 },
    data: {
      label: 'Is Dark?',
      subLabel: 'sun.sun == below_horizon',
      icon: <GitBranch size={18} className="text-white" />,
      color: '#3B82F6',
    },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 520, y: 40 },
    data: {
      label: 'Turn On Lights',
      subLabel: 'light.living_room',
      icon: <Play size={18} className="text-[#0a0f1a]" />,
      color: '#22C55E',
    },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 520, y: 200 },
    data: {
      label: 'Wait 5 min',
      subLabel: '00:05:00',
      icon: <Clock size={18} className="text-[#0a0f1a]" />,
      color: '#06B6D4',
    },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 750, y: 200 },
    data: {
      label: 'Dim to 20%',
      subLabel: 'brightness: 51',
      icon: <Variable size={18} className="text-[#0a0f1a]" />,
      color: '#22C55E',
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    style: { stroke: '#FBBF24', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#FBBF24' },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
    label: 'Yes',
    labelStyle: { fill: '#22C55E', fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'transparent' },
    style: { stroke: '#22C55E', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#22C55E' },
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    animated: true,
    label: 'No',
    labelStyle: { fill: '#EF4444', fontWeight: 600, fontSize: 12 },
    labelBgStyle: { fill: 'transparent' },
    style: { stroke: '#06B6D4', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#06B6D4' },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    animated: true,
    style: { stroke: '#22C55E', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#22C55E' },
  },
];

export const HeroFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Subtle floating animation for nodes
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes((nds) =>
        nds.map((node, i) => ({
          ...node,
          position: {
            x: node.position.x + Math.sin(Date.now() / 2000 + i) * 0.3,
            y: node.position.y + Math.cos(Date.now() / 2500 + i) * 0.3,
          },
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, [setNodes]);

  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-border/50 shadow-card bg-card/50 backdrop-blur-sm">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        proOptions={{ hideAttribution: true }}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      >
        <Background color="hsl(217 33% 20%)" gap={20} size={1} />
      </ReactFlow>
    </div>
  );
};
