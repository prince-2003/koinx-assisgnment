import { useState, useEffect } from "react";
import axios from "axios";
import TradingViewWidget from "./widget";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

function Crypto() {
  const [cryptoData, setCryptoData] = useState(null);
  const [coinData, setCoinData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/bitcoin")
      .then((response) => {
        setCoinData(response.data);
        setLoading(false);
      })
      .catch((err) => setError(err.message || "Failed to fetch coin data"));

    const fetchData = () => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
        )
        .then((response) => {
          setCryptoData(response.data.bitcoin);
          setLoading(false);
        })
        .catch((err) => setError(err.message || "Failed to fetch price data"));
    };

    fetchData();
    const intervalId = setInterval(fetchData, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white h-max rounded-lg p-6">
      <div className="flex items-center">
        <div>
          {loading ? (
            <img src={coinData.image.large} className="w-9" alt="Bitcoin" />
          ) : (
            <div className="w-9 h-9 bg-gray-200 rounded-full animate-pulse"></div>
          )}
        </div>

        <div className="text-2xl font-semibold text-[#0B1426] ml-2">
          {loading ? (
            coinData.name
          ) : (
            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
          )}
        </div>
        <div className="text-sm text-[#5D667B] ml-2">
          {loading ? (
            <>({coinData.symbol})</>
          ) : (
            <div className="w-6 h-4 bg-gray-200 rounded animate-pulse"></div>
          )}{" "}
        </div>
        
          {loading ? (<div className="bg-[#808A9D] px-3 py-2 text-white rounded-lg ml-7">
            Rank #{coinData.market_cap_rank}</div>
          ) : (
            <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
          )}
        
      </div>

      <div className="mt-8 flex">
        <div>
          <div className="text-3xl font-semibold text-[#0B1426]">
            {loading ? (
              `$${cryptoData.usd}`
            ) : (
              <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
            )}
          </div>
          <div className="text-lg font-medium text-[#0B1426]">
            {loading ? (
              `₹ ${cryptoData.inr}`
            ) : (
              <div className="w-20 h-5 bg-gray-200 rounded animate-pulse"></div>
            )}
          </div>
        </div>

        <div
          className={`flex items-center justify-center rounded-lg p-2 h-10 ml-10 ${
            loading && cryptoData.inr_24h_change > 0
              ? "text-green-500 bg-[#EBF9F4] rounded p-1"
              : "text-red-500 bg-[#f9ebeb] rounded p-1"
          }`}
        >
          {loading ? (
            cryptoData.inr_24h_change > 0 ? (
              <TiArrowSortedUp />
            ) : (
              <TiArrowSortedDown />
            )
          ) : (
            <div className="w-10 h-4 bg-gray-200 rounded animate-pulse"></div>
          )}

          {loading ? (
            `${Math.abs(cryptoData.inr_24h_change).toFixed(2)}%`
          ) : (
            <div className="w-10 h-4 bg-gray-200 rounded animate-pulse"></div>
          )}
        </div>

        <div className="text-sm text-[#768396] ml-2 mt-2">(24H)</div>
      </div>

      <hr className="my-4" />

      <div className="lg:flex mb-4 justify-between">
        <div className="ls:text-lg text-sm font-semibold text-[#0B1426]">
          {loading ? (
            ` ${coinData.name} Price Chart (USD)`
          ) : (
            <div className="w-40 h-6 bg-gray-200 rounded animate-pulse"></div>
          )}
        </div>

        <div className="flex lg:space-x-5 space-x-3 mr-4 text-sm text-[#5D667B] font-medium text-center items-center">
          {["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "All"].map(
            (timeframe, idx) => (
              <div
                key={idx}
                className={
                  timeframe === "7D"
                    ? "text-[#0141CF] bg-[#E2ECFE] rounded-3xl px-3 py-1"
                    : ""
                }
              >
                {coinData ? (
                  timeframe
                ) : (
                  <div className="w-6 h-4 bg-gray-200 rounded animate-pulse"></div>
                )}
              </div>
            )
          )}
        </div>
      </div>

      <div className="lg:h-[420px] h-[300px]">
        {loading ? (
          <TradingViewWidget />
        ) : (
          <div className="w-full h-full bg-gray-100 animate-pulse rounded-lg"></div>
        )}
      </div>
    </div>
  );
}

export default Crypto;
