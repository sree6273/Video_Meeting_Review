import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const sentimentData = [
  { name: "Intro", sentiment: 0.1 },
  { name: "Discussion", sentiment: 0.5 },
  { name: "Decision", sentiment: 0.8 },
  { name: "Wrap-up", sentiment: 0.6 },
];

const topicData = [
  { topic: "Budget", count: 4 },
  { topic: "Roadmap", count: 3 },
  { topic: "Hiring", count: 2 },
  { topic: "Client", count: 5 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Meeting Analytics</h1>

      <div className="border rounded-lg p-4 bg-white shadow-md">
        <h2 className="text-lg font-semibold mb-2">Sentiment Over Time</h2>
        <LineChart width={600} height={300} data={sentimentData}>
          <Line type="monotone" dataKey="sentiment" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>

      <div className="border rounded-lg p-4 bg-white shadow-md">
        <h2 className="text-lg font-semibold mb-2">Topic Frequency</h2>
        <BarChart width={600} height={300} data={topicData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="topic" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
}
