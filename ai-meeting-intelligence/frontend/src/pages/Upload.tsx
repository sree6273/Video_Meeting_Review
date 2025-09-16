import React, { useState } from "react";
import api from "../services/api";

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setMessage(null);

    const form = new FormData();
    form.append("file", file);

    try {
      const res = await api.post("/upload", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(`Uploaded successfully. Meeting ID: ${res.data.meeting_id}`);
    } catch (err: any) {
      setMessage("Upload failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 bg-white rounded shadow max-w-lg mx-auto">
      <h2 className="text-lg font-semibold mb-4">Upload Meeting Recording</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="file"
          accept="audio/*,video/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block w-full text-sm"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-slate-800 text-white rounded"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
}
