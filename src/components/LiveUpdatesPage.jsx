import LiveUpdates from "../assets/LiveUpdates";

export default function LiveUpdatesPage() {
  return (
    <main className="flex-1 bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
         Real-Time Outbreak Data
        </h1>
    
      </div>

      {/* Embedded Live Updates Section */}
      <LiveUpdates />
    </main>
  );
}