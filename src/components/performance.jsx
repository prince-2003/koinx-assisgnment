import { IoMdInformationCircle } from "react-icons/io";
import useCoinStore from "../util/store";

function formatDateWithRelativeTime(isoDate) {
    const date = new Date(isoDate);
    const now = new Date();
  
    const differenceInMilliseconds = now - date;
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
  
    let relativeTime = '';
    if (differenceInDays < 30) {
      relativeTime = `${Math.floor(differenceInDays)} days ago`;
    } else if (differenceInDays < 365) {
      relativeTime = `${Math.floor(differenceInDays / 30)} months ago`;
    } else {
      relativeTime = `${Math.floor(differenceInDays / 365)} years ago`;
    }
  
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
  
    return `${formattedDate} (${relativeTime})`;
  }

function PerformanceSection() {
    const { coinData} = useCoinStore();
    if (!coinData) {
        return (
          <div className="bg-white mt-5 rounded-lg lg:p-6 p-2 h-max flex justify-center items-center">
            <div className="text-lg font-medium text-gray-500">Loading data...</div>
          </div>
        );
      }
    
  return (
    <div className="bg-white mt-5 rounded-lg lg:p-6 p-2 h-max">
      <div>
        <div className="text-2xl font-semibold text-[#0F1629]">Performance</div>
        <div className="py-4 mt-2">
          <div className="flex justify-between ">
            <div className="text-start">
              <div className="text-sm text-[#44475B] font-normal p-1">
                Today’s Low
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                46,930.22
              </div>
            </div>
            <div className="w-[500px] h-2 mx-4">
              <div className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 h-full rounded-2xl mt-7"></div>
              <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4">
                <svg
                  viewBox="0 0 100 100"
                  className="lg:w-3 w-2 fill-current text-black ml-7"
                >
                  <polygon points="0,100 50,0 100,100" />
                </svg>
                <span className="text-[#44475B] text-sm font-normal">
                  $47,137.83
                </span>
              </div>
            </div>
            <div className="text-end">
              <div className="text-sm text-[#44475B] font-normal p-1 ">
                Today’s High
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                49,343.83
              </div>
            </div>
          </div>
          <div className="flex justify-between  mt-5">
            <div className="text-start">
              <div className="text-sm text-[#44475B] font-normal p-1">
                52W Low
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                16,930.22{" "}
              </div>
            </div>
            <div className="w-[500px] h-2 mx-4">
              <div className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 h-full rounded-2xl mt-7"></div>
            </div>
            <div className="text-end">
              <div className="text-sm text-[#44475B] font-normal p-1">
                52W High{" "}
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                49,743.83{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="text-[#44475B] font-semibold text-xl">
              Fundamentals
            </div>
            <div className="">
              <IoMdInformationCircle className="text-[#ABB9BF] text-lg ml-2" />
            </div>
          </div>
          <div className="lg:flex mb-8">
            <div className="lg:w-1/2 lg:mr-10 mt-3  ">
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  Bitcoin Price
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                  ${coinData.market_data.current_price.usd}
                </div>
              </div>
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  24h Low / 24h High{" "}
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                  ${coinData.market_data.low_24h.usd} / ${coinData.market_data.high_24h.usd}
                </div>
              </div>
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  7d Low / 7d High
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                  $16,382.07 / $16,874.12
                </div>
              </div>
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  Trading Volume
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                  ${coinData.market_data.total_volume.usd}
                </div>
              </div>
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  Market Cap Rank
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                  #{coinData.market_cap_rank}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:ml-10 lg:mt-3">
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  Market Cap
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                  $323,507,290,047
                </div>
              </div>
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  Market Cap Dominance
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                  38.343%
                </div>
              </div>
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  Volume / Market Cap
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                  {coinData.market_data.market_cap_fdv_ratio}
                </div>
              </div>
              <div className="flex justify-between py-3 border-b-2 border-[#D3E0E6] items-center">
                <div className="text-[#768396] text-sm font-semibold ">
                  All-Time High
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4 -p-2">
                  <div className="text-end">
                    ${coinData.market_data.ath.usd} <span className="text-red-500">{coinData.market_data.ath_change_percentage.usd.toFixed(
                2
              )}%</span>
                  </div>
                  <div className="text-xs font-normal">
                    {formatDateWithRelativeTime(coinData.market_data.ath_date.usd)}
                  </div>
                </div>
              </div>
              <div className="flex justify-between py-3 border-b-2 border-[#D3E0E6] items-center">
                <div className="text-[#768396] text-sm font-semibold">
                  All-Time Low
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4 -p-2">
                  <div className="text-end">
                  ${coinData.market_data.atl.usd} <span className="text-green-500">{coinData.market_data.atl_change_percentage.usd.toFixed(
                2
              )}</span>
                  </div>
                  <div className="text-xs font-normal">
                    {formatDateWithRelativeTime(coinData.market_data.atl_date.usd)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceSection;
