import axios from "axios";
import { useEffect, useState } from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

export default function TrendingCard() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        setTrending(response.data.coins.slice(0, 3));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "An error occurred");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col items-start justify-center rounded-lg gap-4 bg-white p-4 text-black">
      <h1 className="font-bold text-center text-xl">
        Trending Cryptocurrencies
      </h1>
      {trending.map((coin) => (
        <div key={coin.item.id} className="flex items-center gap-4">
          <img
            src={coin.item.small}
            alt={coin.item.name}
            className="w-10 h-10 rounded-full"
          />
          <p className="font-sm">
            {coin.item.name} ({coin.item.symbol})
          </p>
          {coin.item.data.price_change_percentage_24h.usd && (
            <p
              className={`font-medium flex items-center ${
                coin.item.data.price_change_percentage_24h.usd >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {coin.item.data.price_change_percentage_24h.usd >= 0 ? (
                <TiArrowSortedUp />
              ) : (
                <TiArrowSortedDown />
              )}
              {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
