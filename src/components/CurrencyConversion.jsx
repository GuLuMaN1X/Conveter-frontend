import React, { useEffect, useState } from "react";
import "../components/CurrencyConversion.css";

export default function CurrencyConversion() {
  const [rates, setRates] = useState({});
  const [currencyList, setCurrencyList] = useState([]);
  const [base, setBase] = useState("USD");
  const [target, setTarget] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const data = {
      USD: 1, EUR: 0.858, JPY: 156.33, GBP: 0.767, AUD: 1.53,
      CAD: 1.37, CHF: 0.93, CNY: 7.34, SEK: 11.08, NZD: 1.64,
      MXN: 17.60, SGD: 1.37, HKD: 7.81, NOK: 10.53, KRW: 1442.5,
      TRY: 23.45, INR: 83.77, RUB: 98.50, ZAR: 18.52, BRL: 5.25
    };
    setRates(data);
    setCurrencyList(Object.keys(data));
  }, []);

  function convert(amount, baseCode, targetCode) {
    if (!rates[baseCode] || !rates[targetCode]) return "";
    const amountInUSD = amount / rates[baseCode];
    const converted = amountInUSD * rates[targetCode];
    return converted.toFixed(2);
  }

  useEffect(() => {
    if (amount && base && target) {
      setResult(convert(Number(amount), base, target));
    } else {
      setResult("");
    }
  }, [amount, base, target, rates]);

  return (
    <div className="converter-container">
      <h2 className="converter-title">Currency Converter</h2>

      <div className="input-group">
        <label>Base Currency</label>
        <select value={base} onChange={e => setBase(e.target.value)}>
          {currencyList.map(code => <option key={code} value={code}>{code}</option>)}
        </select>
      </div>

      <div className="input-group">
        <label>Target Currency</label>
        <select value={target} onChange={e => setTarget(e.target.value)}>
          {currencyList.map(code => <option key={code} value={code}>{code}</option>)}
        </select>
      </div>

      <div className="input-group">
        <label>Amount</label>
        <input
          type="number"
          min="0"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>

      <div className="input-group">
        <label>Converted Amount</label>
        <input readOnly value={result} className="result-input"/>
      </div>

      <button className="clear-btn" onClick={() => setAmount("")}>Clear</button>
    </div>
  );
}
