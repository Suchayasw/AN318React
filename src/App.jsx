import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Guide from "./pages/Guide";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Header */}
      <div style={{ backgroundColor: "teal", color: "white", padding: "10px" }}>
        <h1>AN318 React Class W5 React Route</h1>
      </div>

      {/* Layout */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <div style={{ width: "200px", backgroundColor: "#3b4c5a", color: "white", padding: "10px" }}>
          <p><Link to="/" style={{ color: "white", textDecoration: "none" }}>หน้าหลัก</Link></p>
          <p><Link to="/guide" style={{ color: "white", textDecoration: "none" }}>วิธีใช้งาน</Link></p>
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

