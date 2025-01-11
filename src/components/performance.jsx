import { IoMdInformationCircle } from "react-icons/io";
import useCoinStore from "../util/coinStore";

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
  const { coinData } = useCoinStore();

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
          {/* Your existing PerformanceSection content */}
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
              {/* Other data fields */}
            </div>
            <div className="lg:w-1/2 lg:ml-10 lg:mt-3">
              <div className="flex justify-between py-3 border-b-2 border-[#D3E0E6] items-center">
                <div className="text-[#768396] text-sm font-semibold ">
                  All-Time High
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4 -p-2">
                  <div className="text-end">
                    ${coinData.market_data.ath.usd}{" "}
                    <span className="text-red-500">
                      {coinData.market_data.ath_change_percentage.usd.toFixed(
                        2
                      )}
                      %
                    </span>
                  </div>
                  <div className="text-xs font-normal">
                    {formatDateWithRelativeTime(
                      coinData.market_data.ath_date.usd
                    )}
                  </div>
                </div>
              </div>
              {/* Other data fields */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceSection;
