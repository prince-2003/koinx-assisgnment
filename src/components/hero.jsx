import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import GettingStarted from "./cardGetttingStarted";
import TrendingCard from "./trendingCard";
import Crypto from "./crypto";
import PerformanceSection from "./performance";
import SentimentSection from "./sentiment";
import About from "./about";

function Hero() {
  return (
    <div className="px-4 md:px-14 py-4">
      
      <div className="flex gap-2 items-center text-gray-800">
        <h3 className="font-medium">CryptoCurrencies</h3>
        <MdKeyboardDoubleArrowRight aria-label="Breadcrumb navigation" />
        <h3 className="font-medium">Bitcoin</h3>
      </div>

      <div className="flex gap-2 h-full mt-4 relative">
        
        <div className=" flex-1 md:flex-[3/4] max-h-full overflow-auto ">
          <Crypto />
          <PerformanceSection />
          <SentimentSection />
          <About />
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
