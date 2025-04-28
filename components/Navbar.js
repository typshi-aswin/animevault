export default function Navbar() {
  return (
    <div className="bg-black text-white py-4 px-8">
      <div className="flex items-center justify-between relative h-24">
        
        {/* Left side: Project name */}
        <h1 className="text-2xl font-bold z-10">AnimeVault</h1>

        {/* Centered Search Bar */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px]">
          <div className="relative flex items-center w-full h-20 bg-white rounded-full overflow-hidden">
            
            
            {/* Input */}
            <input
              type="text"
              placeholder="Search something..."
              className="w-full h-full pl-12 pr-4 text-gray-700 text-sm outline-none"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
