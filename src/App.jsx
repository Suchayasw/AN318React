export default function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-white">
      {/* ชื่อ Application */}
      <header className="p-4 mt-12">
        <h1 className="text-4xl font-bold">My React Application</h1>
      </header>

      <div className="flex flex-1">
        {/* หน้าจอหลัก */}
        <main className="flex-1 p-6">
          {/* โปรไฟล์ */}
          <div className="mb-6">
            <p>Profile Name : 65111505 น.ส.สุพิชชา สุวรรณมาลี</p>
            <button className="px-4 py-2 bg-gray-100 rounded mt-2">(ชมพู)</button>
          </div>

          <div className="mb-6">
            <p>Profile Name : 65111505 น.ส.สุพิชชา สุวรรณมาลี</p>
            <button className="px-4 py-2 bg-gray-100 rounded mt-2">(ชมพู)</button>
          </div>

          <div className="mb-6">
            <p>Profile Name : 65111505 น.ส.สุพิชชา สุวรรณมาลี</p>
            <button className="px-4 py-2 bg-gray-100 rounded mt-2">(ชมพู)</button>
          </div>

          {/* Copyright */}
          <p className="mt-12 font-semibold">
            Copyright ANT DPU 2025 All rights reserved.
          </p>
        </main>
      </div>
    </div>
  );
}
