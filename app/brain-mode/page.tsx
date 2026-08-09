export default function BrainModePage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-32">
      <h1 className="text-4xl font-bold text-purple-400 mb-6">
        🧠 Brain Mode = Chess
      </h1>

      {/* Chess iframe / component */}
      <div className="w-full max-w-[420px] px-4">
        <div className="rounded-xl overflow-hidden shadow-xl border border-purple-500/20">
          <iframe
            src="/chess/chess.html"
            className="w-full h-[500px] sm:h-[520px] border-none"
          />
        </div>
      </div>

      <p className="text-gray-400 mt-6">
        Challenge the AI. Improve your strategy.
      </p>
    </div>
  );
}
