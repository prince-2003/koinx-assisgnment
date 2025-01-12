
import React, { useEffect, useRef, memo, useState } from 'react';
import useCoinStore, { useCoinTickerStore } from '../util/store';

import axios from 'axios';

function TradingViewWidget() {
  const container = useRef(null);
  const {coinData} = useCoinStore();
  const id = coinData?.id || "bitcoin";
  
  const {ticker, setTicker} = useCoinTickerStore();
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    const fetchCoinTicker = async () => {
      try {
        
        console.log(`https://api.coingecko.com/api/v3/coins/${id}/tickers`);
          const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${id}/tickers`,
            { headers: { accept: "application/json" } }
          );
          setTicker(response.data);
          console.log(response.data);
          
        
      } catch (err) {
        
        setError(err.message || "Failed to fetch coin data");
      }
    };

    fetchCoinTicker();
    const intervalId = setInterval(fetchCoinTicker, 120000);
    return () => clearInterval(intervalId);
  }, [id]);

  const usdTickers = ticker?.tickers?.filter((t) => t.target.toUpperCase() === "USD") || [];
  const randomIndex = Math.floor(Math.random() * usdTickers.length);
  const randomTicker = ticker.tickers[randomIndex];
  const symbol = randomTicker.market.name.split(' ')[0].split(/[ .]/)[0].toUpperCase() + ":" + coinData.symbol.toUpperCase()+ randomTicker.target.toUpperCase();
  console.log(symbol);
  
  useEffect(() => {
    if (container.current) {
      
      container.current.innerHTML = "";
    }

    const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "CRYPTO:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "allow_symbol_change": false,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);

   
    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, []); 

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      
    </div>
  );
}

export default memo(TradingViewWidget);
