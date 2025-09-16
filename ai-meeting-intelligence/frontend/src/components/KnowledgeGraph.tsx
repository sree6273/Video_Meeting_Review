import ForceGraph2D from "react-force-graph-2d";

interface GraphData {
  nodes: { id: string }[];
  links: { source: string; target: string }[];
}

interface Props {
  graph: GraphData;
}

export default function KnowledgeGraph({ graph }: Props) {
  if (!graph || !graph.nodes || graph.nodes.length === 0) {
    return <p className="text-gray-500">No knowledge graph available.</p>;
  }

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <h2 className="text-xl font-bold mb-3">Knowledge Graph</h2>
      <div className="h-[400px]">
        <ForceGraph2D
          graphData={graph}
          nodeAutoColorBy="id"
          linkDirectionalParticles={2}
          linkDirectionalParticleSpeed={0.005}
        />
      </div>
    </div>
  );
}
