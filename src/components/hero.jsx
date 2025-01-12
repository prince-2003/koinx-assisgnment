import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import GettingStarted from "./cardGetttingStarted";
import TrendingCard from "./trendingCard";
import Crypto from "./crypto";
import PerformanceSection from "./performance";
import SentimentSection from "./sentiment";
import About from "./about";
import Tokenomics from "./tokenomics";
import TeamCard from "./team";
import { useParams } from "react-router-dom";
import useCoinStore from "../util/store";
import { useEffect, useState } from "react";
import axios from "axios";

function Hero() {
  const {id} = useParams();
  const { coinData, setCoinData} = useCoinStore();
  const [error, setError] = useState(null);
  let Id = id || "bitcoin";

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        
        if (!coinData || coinData.id !== Id) {
          const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${Id}`,
            { headers: { accept: "application/json" } }
          );
          setCoinData(response.data);
          window.scrollTo(0, 0);
        }
      } catch (err) {

        setError(err.message || "Failed to fetch coin data");
      }
    };

    fetchCoinData();

    const intervalId = setInterval(fetchCoinData, 60000); 
    return () => clearInterval(intervalId);
  }, [Id, coinData, setCoinData]);
  return (
  
  
    <div className="px-4 md:px-14 py-4 bg-[#eff2f5] ">
      
      <div className="flex gap-2 items-center text-gray-800">
        <h3 className="font-medium">CryptoCurrencies</h3>
        <MdKeyboardDoubleArrowRight aria-label="Breadcrumb navigation" />
        <h3 className="font-medium">{Id}</h3>
      </div>

      <div className="flex gap-2 h-full mt-4 relative">
        
        <div className=" flex-1 md:flex-[3/4] max-h-full overflow-auto ">
          <Crypto />
          <PerformanceSection />
          <SentimentSection />
          <About />
          <Tokenomics />
          <TeamCard />
        </div>

        <div className="hidden md:block md:flex-[1/4] h-full sticky top-[12%] px-4 space-y-4">
          <GettingStarted />
          <TrendingCard />
        </div>
      </div>
    </div>
  );
}

export default Hero;
