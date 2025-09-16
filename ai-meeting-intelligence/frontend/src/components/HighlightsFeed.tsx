interface Props {
  highlights: string[];
}

export default function HighlightsFeed({ highlights }: Props) {
  if (!highlights || highlights.length === 0) {
    return <p className="text-gray-500">No highlights available.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Highlights</h2>
      <ul className="space-y-2">
        {highlights.map((h, idx) => (
          <li key={idx} className="border p-3 rounded bg-yellow-50">
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}
