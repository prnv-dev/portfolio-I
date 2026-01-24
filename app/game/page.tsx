export default function GamePage() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center pt-20">
      
      <h1 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">
        🧠 Brain Mode — Chess
      </h1>

<div className="w-full max-w-[620px] aspect-square bg-[#e5e5e5] rounded-xl overflow-hidden shadow-lg">
  <iframe
    src="/chess/chess.html"
    className="w-full h-full border-none"
  />
</div>


      <p className="text-gray-400 mt-4 text-sm">
        Challenge the AI. Improve your strategy.
      </p>
    </div>
  );
}
