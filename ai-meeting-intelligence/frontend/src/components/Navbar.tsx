import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold text-slate-800">
        AI Meeting Intelligence
      </h1>
      <nav className="flex gap-4 text-sm">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/upload" className="hover:underline">Upload</Link>
        <Link to="/search" className="hover:underline">Search</Link>
      </nav>
    </header>
  );
}
