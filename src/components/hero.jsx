import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import GettingStarted from "./cardGetttingStarted";
import TrendingCard from "./trendingCard";

function Hero() {
  return (
    <div className="px-14 py-4 h-screen">
      <div className="flex gap-2 items-center">
        <h3>CryptoCurrencies</h3>
        <MdKeyboardDoubleArrowRight />
        <h3>Bitcoin</h3>
      </div>
      <div className="flex gap-2 mt-4 h-full relative">
        <div className="bg-red-300 basis-3/4 overflow-y-scroll min-h-full p-4">
          <h1 className="text-2xl font-bold mb-4">Bitcoin Overview</h1>
          <p>Some details about Bitcoin...</p>
          <div className="mt-4">
            <p>Long scrolling content...</p>
            <div className="h-[2000px]">Scroll to test scrolling behavior</div>
          </div>
        </div>
        <div className=" basis-1/4 h-full sticky top-0 px-4 space-y-4">
          <GettingStarted />
          <TrendingCard />
        </div>
      </div>
    </div>
  );
}

export default Hero;
