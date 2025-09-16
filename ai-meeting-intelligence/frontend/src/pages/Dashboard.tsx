import React, { useEffect, useState } from "react";
import api from "../services/api";
import MeetingCard from "../components/MeetingCard";

export default function Dashboard() {
  const [meetings, setMeetings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/meetings")
      .then((res) => setMeetings(res.data.meetings || []))
      .catch(() => setMeetings([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Meetings</h2>
      {loading ? (
        <p>Loading...</p>
      ) : meetings.length === 0 ? (
        <p>No meetings uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {meetings.map((m) => (
            <MeetingCard key={m.id} {...m} />
          ))}
        </div>
      )}
    </div>
  );
}
