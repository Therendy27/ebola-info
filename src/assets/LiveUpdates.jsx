import { useEffect, useState } from "react";
import { Search, Mic } from "lucide-react";

export default function LiveUpdates() {
  const [outbreakData, setOutbreakData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data (placeholder API)
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        setOutbreakData(data.slice(0, 12)); // limit for demo
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching outbreak data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p className="text-xl font-semibold text-blue-600">
          Loading outbreak data...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">

      {/* Search + Filter Section */}
      <div className="w-full flex flex-col items-center mt-6 px-4">

        {/* Search Bar (CENTERED) */}
        <div className="w-full flex justify-center">
          <div className="flex items-center w-full max-w-2xl bg-white rounded-full shadow px-4 py-2 border">

            {/* Mic Icon */}
            <button className="p-2 text-gray-600 hover:text-blue-500">
              <Mic size={20} />
            </button>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by country..."
              className="flex-1 px-3 outline-none"
            />

            {/* Search Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full ml-2">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Filter Buttons (CENTERED) */}
        <div className="flex gap-2 justify-center mt-4">
          <button className="border rounded-md px-4 py-2 bg-white">
            Filter by Region ▾
          </button>
          <button className="border rounded-md px-4 py-2 bg-white">
            Sort by A–Z ▾
          </button>
        </div>

              {/* Tabs (CENTERED) */}
      <div className="flex justify-center w-full max-w-6xl mt-4 space-x-6 text-gray-700 font-medium">
        <button className="text-blue-600">Favorites</button>
        <button>Recent Searches</button>
        <button>Trending</button>
        <button>Most Recent</button>
      </div>

      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto mt-6">

        {outbreakData.map((country) => (
          <div
            key={country.country}
            className="bg-white shadow-md rounded-lg p-5 border"
          >
            {/* Country Name + Flag */}
            <div className="flex items-center gap-2 text-lg font-semibold mb-2">
              <img
                src={country.countryInfo.flag}
                alt=""
                className="w-10 h-6 rounded-sm border"
              />
              {country.country}
            </div>

            {/* Stats */}
            <p className="text-gray-800 mb-1">
              <strong>Cases:</strong> {country.cases.toLocaleString()}
            </p>
            <p className="text-gray-800 mb-1">
              <strong>Deaths:</strong> {country.deaths.toLocaleString()}
            </p>
            <p className="text-gray-800">
              <strong>Recovered:</strong> {country.recovered.toLocaleString()}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}