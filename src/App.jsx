import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // เพิ่มงาน
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  // ทำ/ยังไม่ทำ
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  // ลบงาน
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-400 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center mb-4 text-purple-700">
          🌟 My Task Application 🌟
        </h1>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="พิมพ์สิ่งที่อยากทำ..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            onClick={addTask}
            className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-800"
          >
            เพิ่ม
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-3">
          {tasks.map((t, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-3 rounded-xl shadow-md ${
                t.done ? "bg-green-100 line-through text-gray-500" : "bg-pink-100"
              }`}
            >
              <span
                onClick={() => toggleTask(index)}
                className="cursor-pointer"
              >
                {t.text}
              </span>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700"
              >
                ลบ
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-gray-600 text-sm">
          ✅ คลิกที่งาน = ทำเสร็จแล้ว | 🗑️ ปุ่มลบ = เอาออก
        </p>
      </div>
    </div>
  );
}

