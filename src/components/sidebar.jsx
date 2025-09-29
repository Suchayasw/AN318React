import { NavLink } from "react-router-dom";

export default function sidebar() {
  return (
    <aside className="w-48 bg-slate-700 text-white p-4 flex flex-col gap-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `block px-3 py-2 rounded hover:bg-slate-600 ${
            isActive ? "bg-slate-500 font-bold" : ""
          }`
        }
      >
        🏠 หน้าหลัก
      </NavLink>

      <NavLink
        to="/how"
        className={({ isActive }) =>
          `block px-3 py-2 rounded hover:bg-slate-600 ${
            isActive ? "bg-slate-500 font-bold" : ""
          }`
        }
      >
        📘 วิธีใช้งาน
      </NavLink>
    </aside>
  );
}