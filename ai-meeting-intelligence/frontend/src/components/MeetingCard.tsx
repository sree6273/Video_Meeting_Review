import React from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  filename: string;
  created_at: string;
}

export default function MeetingCard({ id, filename, created_at }: Props) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-semibold">{filename}</h3>
      <p className="text-xs text-slate-500">{new Date(created_at).toLocaleString()}</p>
      <Link
        to={`/meetings/${id}`}
        className="mt-2 inline-block text-sm text-blue-600 hover:underline"
      >
        View details →
      </Link>
    </div>
  );
}
