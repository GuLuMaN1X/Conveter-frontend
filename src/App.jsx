import { useState } from "react";
// import AddNewExchangeRate from "./components/AddNewExchangeRate";
// import ExchangeRates from "./components/ExchangeRates";
import CurrencyExchange from './components/CurrencyExchange'
import CurrencyConversion from "./components/CurrencyConversion";

function App() {
  return (
    <div className="container">
      <div className="left_side_1">
        <CurrencyExchange/>
      </div>
      <div className="right_side_1">
        <CurrencyConversion/>
      </div>
    </div>
  );
}

export default App;
