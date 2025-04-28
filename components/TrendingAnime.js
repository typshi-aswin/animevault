export default function TrendingAnime() {
    return (
      <div className="flex gap-6 p-6">
        <div className="relative w-80 h-48 bg-cover rounded-xl" style={{ backgroundImage: 'url(https://via.placeholder.com/400x300)' }}>
          <div className="absolute bottom-0 left-0 p-3 bg-black bg-opacity-60 w-full rounded-b-xl">
            <h2 className="text-white font-bold">Anime Title</h2>
            <button className="text-white bg-gray-700 p-2 rounded-full">Details</button>
          </div>
        </div>
        <div className="relative w-60 h-48 bg-cover rounded-xl" style={{ backgroundImage: 'url(https://via.placeholder.com/400x300)' }}>
          <div className="absolute bottom-0 left-0 p-3 bg-black bg-opacity-60 w-full rounded-b-xl">
            <h2 className="text-white font-bold">Anime Title</h2>
            <button className="text-white bg-gray-700 p-2 rounded-full">Details</button>
          </div>
        </div>
      </div>
    );
  }
  