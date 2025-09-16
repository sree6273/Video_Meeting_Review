import React from "react";

interface Props {
  text: string;
  sentiment?: string;
}

export default function ActionItemCard({ text, sentiment }: Props) {
  return (
    <div className="p-3 border rounded bg-slate-50">
      <p className="text-sm">{text}</p>
      {sentiment && (
        <span className="text-xs text-slate-500">Sentiment: {sentiment}</span>
      )}
    </div>
  );
}
