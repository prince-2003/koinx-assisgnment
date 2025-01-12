import Carousel from "react-multi-carousel";
import { useTrendingCoinStore } from "../util/store";
import "react-multi-carousel/lib/styles.css";
import {  useNavigate, useParams } from "react-router-dom";


const customStyles = `
  .react-multi-carousel-list {
   position: static ;
   padding: 45px 0px;
   
  }
`;
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow = ({ onClick }) => (
    <button
    onClick={onClick}
    className="absolute right-[-10px] top-1/2  bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 z-20"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-black"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
  );

  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-[-26px] top-1/2  bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 z-10"
      
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
 

function Coin({ id, symbol, sparkline, img, changePercentage }) {
  const isPositiveChange = parseFloat(changePercentage) >= 0;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-w-[80%] md:min-w-[300px] mr-4 items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow" onClick={()=> navigate(`/${id}`)}>
      <div className="flex items-center justify-between w-full mb-3">
        <div className="flex items-center gap-2">
          <img
            src={img}
            className="w-8 h-8 rounded-full pointer-events-none"
            alt={`${symbol} icon`}
          />
          <div className="text-lg font-semibold text-[#0F1629]">
            {symbol.toUpperCase()}
          </div>
        </div>
        <div
          className={`flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium ${
            isPositiveChange
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {changePercentage}%
        </div>
      </div>
      <img
        src={sparkline}
        className="w-full max-w-[80%] h-[90%] object-contain pointer-events-none"
        alt={`${symbol} sparkline`}
      />
    </div>
  );
}

function TrendingCoins() {
  const { trending } = useTrendingCoinStore();
  const {id} = useParams();

  if (!trending) {
    return (
      <div className="bg-white mt-5 rounded-lg lg:p-6 p-2 h-max flex justify-center items-center">
        <div className="text-lg font-medium text-gray-500">Loading data...</div>
      </div>
    );
  }

  return (
    <div className="h-auto bg-white  mt-4  px-8 pt-5 ">
      <div className="text-2xl font-semibold text-[#0F1629]">
        Trending Coins
      </div>
      <div className="relative w-auto gap-4">
      <style>{customStyles}</style>
      <Carousel
          responsive={responsive}
          infinite={true}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
        {trending.map((coin, index) => {
          const { item } = coin;
          if (!item || !item.data) return null; 

          return (
            <Coin
              key={index}
              id={item.id}
              symbol={item.symbol}
              img={item.small}
              changePercentage={
                item.data.price_change_percentage_24h?.usd?.toFixed(2) || "N/A"
              }
              sparkline={item.data.sparkline || ""}
            />
          );
        })}
        </Carousel>
      </div>
    </div>
  );
}

export default TrendingCoins;
