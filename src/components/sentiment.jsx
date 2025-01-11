import { FaAngleRight } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa";
import Card from "./sentimentCard";
import { FaArrowTrendUp } from "react-icons/fa6";


function SentimentSection() {
  return (
    <div className="bg-white h-max rounded-lg my-5 lg:p-6 p-3">
      <div>
        <div className="text-2xl font-semibold text-[#0F1629]">Sentiment</div>
        <div className="flex items-center py-2 mt-2">
          <div className="text-[#44475B] font-semibold text-xl">Key Events</div>
          <div className="">
            <IoMdInformationCircle className="text-[#ABB9BF] text-lg ml-2" />
          </div>
        </div>
        <div className="flex overflow-x-scroll gap-10">
          <Card icon={FaRegNewspaper} bgColor="#0082FF"/>
          <Card icon={FaArrowTrendUp} bgColor="#0FBA83"/>
        </div>
       

        <div className="mb-6">
          <div className="flex items-center py-4 mt-6">
            <div className="text-[#44475B] font-semibold text-xl">
              Analyst Estimates
            </div>
            <div className="">
              <IoMdInformationCircle className="text-[#ABB9BF] text-lg ml-2" />
            </div>
          </div>

          <div className="flex mt-2">
            <div className="text-4xl bg-[#EBF9F4] text-[#0FBA83] lg:px-10 lg:py-12 px-8 py-6 rounded-full items-center flex">
              76<div className="text-lg ">%</div>
            </div>

            <div className="lg:px-10 px-2 mt-2">
              <div className="flex p-2 items-center">
                <div className="text-[#7C7E8C] text-[15px] mr-9">Buy</div>
                <div className="md:w-96 w-20 h-2">
                  <div className="bg-[#00B386] h-full rounded-lg "></div>
                </div>
                <div className="ml-3 text-[#7C7E8C] text-sm">76%</div>
              </div>

              <div className="flex p-2 items-center">
                <div className="text-[#7C7E8C] text-[15px] mr-9">Hold</div>
                <div className="md:w-8 w-4 h-2">
                  <div className="bg-[#C7C8CE] h-full rounded-lg "></div>
                </div>
                <div className="ml-3 text-[#7C7E8C] text-sm">8%</div>
              </div>

              <div className="flex p-2 items-center">
                <div className="text-[#7C7E8C] text-[15px] mr-9">Sell</div>
                <div className="md:w-16 w-8 h-2">
                  <div className="bg-[#F7324C] h-full rounded-lg "></div>
                </div>
                <div className="ml-3 text-[#7C7E8C] text-sm">16%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SentimentSection;
