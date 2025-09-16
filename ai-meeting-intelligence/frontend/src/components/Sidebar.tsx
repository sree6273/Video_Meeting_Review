import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard" },
    { path: "/upload", label: "Upload" },
    { path: "/search", label: "Search" },
  ];

  return (
    <aside className="w-56 bg-slate-800 text-white p-4 hidden md:block">
      <ul className="space-y-3">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`block px-3 py-2 rounded ${
                location.pathname === item.path
                  ? "bg-slate-600"
                  : "hover:bg-slate-700"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
