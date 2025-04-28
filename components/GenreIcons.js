export default function GenreIcons() {
    const genres = ['Action', 'Adventure', 'Fantasy', 'Comedy', 'Drama'];
  
    return (
      <div className="flex gap-4 overflow-x-scroll p-6">
        {genres.map((genre, index) => (
          <div key={index} className="bg-gray-700 text-white py-2 px-4 rounded-md opacity-70 hover:opacity-100">
            {genre}
          </div>
        ))}
      </div>
    );
  }
  