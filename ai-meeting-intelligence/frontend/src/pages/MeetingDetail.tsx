import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import ActionItemCard from "../components/ActionItemCard";

export default function MeetingDetail() {
  const { id } = useParams();
  const [meeting, setMeeting] = useState<any>(null);
  const [summary, setSummary] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    api.get(`/meetings/${id}`).then((res) => setMeeting(res.data));
    api.get(`/summary/${id}`).then((res) => setSummary(res.data.summary));
  }, [id]);

  if (!meeting) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{meeting.filename}</h2>
      <p className="text-sm text-slate-500">
        Uploaded at {new Date(meeting.created_at).toLocaleString()}
      </p>

      {summary && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Summary</h3>
          <p className="text-sm">{summary}</p>
        </div>
      )}

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Action Items</h3>
        {meeting.action_items?.length ? (
          <div className="space-y-2">
            {meeting.action_items.map((ai: any, idx: number) => (
              <ActionItemCard key={idx} text={ai.text} sentiment={ai.sentiment} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-500">No action items extracted.</p>
        )}
      </div>
    </div>
  );
}
