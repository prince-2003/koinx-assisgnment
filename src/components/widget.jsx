
import React, { useEffect, useRef, memo, useState } from 'react';
import useCoinStore, { useCoinTickerStore } from '../util/store';

import axios from 'axios';

function TradingViewWidget() {
  const container = useRef(null);
  
  
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
