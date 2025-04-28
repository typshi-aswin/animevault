export default function TopAnimes() {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white">Top Animes</h2>
        <div className="flex gap-4 overflow-x-auto mt-4">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className="bg-gray-800 text-white p-4 rounded-md">
              <img src="https://via.placeholder.com/100x150" alt="Anime Poster" className="w-full h-40 object-cover rounded-md" />
              <h3 className="mt-2">Anime Title</h3>
              <p className="text-sm text-gray-400">Rating: 8.7</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  