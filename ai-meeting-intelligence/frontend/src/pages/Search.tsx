import React, { useState } from "react";
import api from "../services/api";

export default function SearchPage() {
  const [q, setQ] = useState("");
  const [meetingId, setMeetingId] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function onSearch(e?: React.FormEvent) {
    e?.preventDefault();
    if (!q.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const params: any = { q };
      if (meetingId) params.meeting_id = meetingId;
      const res = await api.get("/v1/endpoints/search", { params: { query: q, meeting_id: meetingId || undefined } });
      setResults(res.data.results || res.data.results || []);
    } catch (err: any) {
      setError(err?.response?.data?.detail || err?.message || "Search failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Knowledge Base Search</h2>
      <form onSubmit={onSearch} className="flex gap-2 mb-3">
        <input value={q} onChange={(e) => setQ(e.target.value)} className="flex-1 p-2 border rounded" placeholder="Search meeting transcripts..." />
        <input value={meetingId} onChange={(e) => setMeetingId(e.target.value)} className="w-36 p-2 border rounded" placeholder="meeting id (optional)" />
        <button className="px-4 py-2 bg-slate-800 text-white rounded" disabled={loading}>{loading ? "Searching..." : "Search"}</button>
      </form>

      {error && <div className="text-red-600 mb-2">{error}</div>}

      <div className="space-y-3">
        {results.length === 0 && <div className="text-sm text-slate-500">No results yet.</div>}
        {results.map((r: any, idx: number) => (
          <div key={idx} className="p-3 border rounded bg-slate-50">
            <div className="text-sm font-medium">{r.metadata?.chunk_index ? `Chunk ${r.metadata.chunk_index}` : r.id}</div>
            <div className="text-xs text-slate-500">{r.collection ? `Collection: ${r.collection}` : ''}</div>
            <div className="mt-2 text-sm text-slate-700">{r.document}</div>
            <div className="mt-2 text-xs text-slate-400">score: {r.score ?? '-'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
