import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-semibold">404 - Page Not Found</h2>
      <Link to="/" className="text-blue-600 hover:underline mt-2 block">
        Back to Dashboard
      </Link>
    </div>
  );
}
