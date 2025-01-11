import axios from "axios";
import { useEffect, useState } from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { useTrendingCoinStore } from "../util/store";

export default function TrendingCard() {
  const { trending, setTrending } = useTrendingCoinStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        setTrending(response.data.coins);
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
    <div className="flex flex-col items-start justify-center rounded-lg gap-2 bg-white p-4 text-black">
      <h1 className="font-bold text-center text-xl">
        Trending Cryptocurrencies
      </h1>
      {trending.slice(0, 3).map((coin) => (
        <div
          key={coin.item.id}
          className="flex items-center justify-between w-full gap-4 p-2 "
        >
          <div className="flex items-center gap-2">
          <img
            src={coin.item.small}
            alt={coin.item.name}
            className="w-8 h-8 rounded-full"
          />
          <p className="font-sm text-sm ">
            {coin.item.name} ({coin.item.symbol})
          </p>
          </div>
          {coin.item.data.price_change_percentage_24h.usd && (
            <p
              className={`font-medium flex items-center ${
                coin.item.data.price_change_percentage_24h.usd >= 0
                  ? "text-green-500 bg-[#EBF9F4] rounded p-1"
                  : "text-red-500 bg-[#f9ebeb] rounded p-1"
              }`}
            >
              {coin.item.data.price_change_percentage_24h.usd >= 0 ? (
                <TiArrowSortedUp />
              ) : (
                <TiArrowSortedDown />
              )}
              {Math.abs(coin.item.data.price_change_percentage_24h.usd).toFixed(
                2
              )}
              %
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
