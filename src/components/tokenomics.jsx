import  { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [state] = useState({
    series: [80, 20], 
    options: {
      chart: {
        type: "donut",
        height: 200,
      },
      labels: ["Crowdsale investors", "Foundation"], 
      colors: ["#0082FF", "#FAA002"],
      legend: {
        position: "right",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        height={200}
      />
    </div>
  );
};

function Tokenomics() {
  return (
    <div className="bg-white h-max rounded-lg my-5 p-6">
      <div className="text-[#0F1629] text-2xl font-semibold">Tokenomics</div>
      <div className="my-6">
        <div className="text-[#1D1D1D] text-xl font-semibold">
          Initial Distribution
        </div>
        <div className="py-4 flex">
          <div>
            <ApexChart />
          </div>
          
        </div>
        <div className="text-[#3E424A] text-[16px] py-2">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
