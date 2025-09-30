import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./pages/Home";
import Week2 from "./pages/Week2";
import Week3 from "./pages/Week3";
import Week4 from "./pages/Week4";
import Week1 from "./pages/Week1";

export default function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <header className="bg-emerald-800 text-white p-4">
        <h1>AN318 React Class W5 React Route</h1>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/week1" element={<Week1 />} />
            <Route path="/week2" element={<Week2 />} />
            <Route path="/week3" element={<Week3 />} />
            <Route path="/week4" element={<Week4 />} />
          </Routes>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-700 text-white p-4 text-center">
        2025 Copyright
      </footer>
    </div>
  );
}


