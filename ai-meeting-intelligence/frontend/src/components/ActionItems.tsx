interface Props {
  items: { task: string; owner?: string; due_date?: string }[];
}

export default function ActionItems({ items }: Props) {
  if (!items || items.length === 0) {
    return <p className="text-gray-500">No action items assigned.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Action Items</h2>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="border p-3 rounded bg-green-50">
            <p className="font-medium">{item.task}</p>
            {item.owner && <p className="text-sm">Owner: {item.owner}</p>}
            {item.due_date && (
              <p className="text-sm text-gray-600">Due: {item.due_date}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
