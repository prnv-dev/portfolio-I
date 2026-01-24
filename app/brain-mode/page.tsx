export default function BrainModePage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-32">
      <h1 className="text-4xl font-bold text-purple-400 mb-6">
        🧠 Brain Mode = Chess
      </h1>

      {/* Chess iframe / component */}
      <div className="rounded-xl overflow-hidden shadow-xl">
        <iframe
          src="/chess/chess.html"
          className="w-[420px] h-[520px] border-none"
        />
      </div>

      <p className="text-gray-400 mt-6">
        Challenge the AI. Improve your strategy.
      </p>
    </div>
  );
}
