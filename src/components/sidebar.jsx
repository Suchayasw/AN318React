import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <h2 className="font-bold mb-4">My App</h2>
      <ul className="space-y-2">
        <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
        <li><Link to="/week1" className="text-blue-600 hover:underline">Week 1</Link></li>
        <li><Link to="/week2" className="text-blue-600 hover:underline">Week 2</Link></li>
        <li><Link to="/week3" className="text-blue-600 hover:underline">Week 3</Link></li>
        <li><Link to="/week4" className="text-blue-600 hover:underline">Week 4</Link></li>
      </ul>
    </aside>
  );
}
