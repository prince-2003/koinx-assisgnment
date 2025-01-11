import { useState, useEffect } from "react";
import axios from "axios";
import TradingViewWidget from "./widget";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import useCoinStore from "../util/store";

function Crypto() {
    const { coinData, setCoinData} = useCoinStore();
  const [error, setError] = useState(null);

 
    useEffect(() => {
        const fetchCoinData = async () => {
          try {
            if (!coinData) {
              const response = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin", {
                headers: { accept: 'application/json' }
              });
              setCoinData(response.data);
            }
          } catch (err) {
            setError(err.message || "Failed to fetch coin data");
          }
        };

    
    fetchCoinData();
    

    const intervalId = setInterval(fetchCoinData, 60000); 
    return () => clearInterval(intervalId);
  }, [coinData, setCoinData]);

  if (!coinData) {
    return (
      <div className="bg-white h-max rounded-lg p-6">
        <div className="flex items-center">
          <div>
            <div className="w-9 h-9 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
          <div className="text-2xl font-semibold text-[#0B1426] ml-2">
            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="text-sm text-[#5D667B] ml-2">
            <div className="w-6 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="w-16 h-4 bg-gray-300 rounded animate-pulse ml-7"></div>
        </div>
        <div className="mt-8 flex">
          <div>
            <div className="text-3xl font-semibold text-[#0B1426]">
              <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="text-lg font-medium text-[#0B1426]">
              <div className="w-20 h-5 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-lg p-2 h-10 ml-10">
            <div className="w-10 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-10 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="text-sm text-[#768396] ml-2 mt-2">
            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="lg:flex mb-4 justify-between">
          <div className="w-40 h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="flex lg:space-x-5 space-x-3 mr-4 text-sm text-[#5D667B] font-medium text-center items-center">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className="w-6 h-4 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
        <div className="lg:h-[420px] h-[300px]">
          <div className="w-full h-full bg-gray-100 animate-pulse rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white h-max rounded-lg p-6">
      <div className="flex items-center">
        <img src={coinData.image.large} className="w-9" alt="Bitcoin" />
        <div className="text-2xl font-semibold text-[#0B1426] ml-2">{coinData.name}</div>
        <div className="text-sm text-[#5D667B] ml-2">({coinData.symbol})</div>
        <div className="bg-[#808A9D] px-3 py-2 text-white rounded-lg ml-7">
          Rank #{coinData.market_cap_rank}
        </div>
      </div>

      <div className="mt-8 flex">
        <div>
          <div className="text-3xl font-semibold text-[#0B1426]">${coinData.market_data.current_price.usd}</div>
          <div className="text-lg font-medium text-[#0B1426]">₹ {coinData.market_data.current_price.inr}</div>
        </div>

        <div
          className={`flex items-center justify-center rounded-lg p-2 h-10 ml-10 ${
            coinData.market_data.price_change_percentage_24h_in_currency.inr > 0
              ? "text-green-500 bg-[#EBF9F4] rounded p-1"
              : "text-red-500 bg-[#f9ebeb] rounded p-1"
          }`}
        >
          {coinData.market_data.price_change_percentage_24h_in_currency.inr > 0? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          {Math.abs(coinData.market_data.price_change_percentage_24h_in_currency.inr).toFixed(2)}%
        </div>

        <div className="text-sm text-[#768396] ml-2 mt-2">(24H)</div>
      </div>

      <hr className="my-4" />

      <div className="lg:flex mb-4 justify-between">
        <div className="text-lg font-semibold text-[#0B1426]">{coinData.name} Price Chart (USD)</div>
        <div className="flex lg:space-x-5 space-x-3 mr-4 text-sm text-[#5D667B] font-medium text-center items-center">
          {["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "All"].map((timeframe, idx) => (
            <div
              key={idx}
              className={
                timeframe === "7D"
                  ? "text-[#0141CF] bg-[#E2ECFE] rounded-3xl px-3 py-1"
                  : ""
              }
            >
              {timeframe}
            </div>
          ))}
        </div>
      </div>

      <div className="lg:h-[420px] h-[300px]">
        <TradingViewWidget />
      </div>
    </div>
  );
}

export default Crypto;
