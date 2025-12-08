import React from "react";
import "./CurrencyTable.css";

export default function CurrencyTable() {
  const currenciesData = [
    { code: "USD", name: "US Dollar", sign: "$", rate: 1 },
    { code: "EUR", name: "Euro", sign: "€", rate: 0.858 },
    { code: "JPY", name: "Japanese Yen", sign: "¥", rate: 156.33 },
    { code: "GBP", name: "British Pound", sign: "£", rate: 0.767 },
    { code: "AUD", name: "Australian Dollar", sign: "A$", rate: 1.53 },
    { code: "CAD", name: "Canadian Dollar", sign: "C$", rate: 1.37 },
    { code: "CHF", name: "Swiss Franc", sign: "Fr", rate: 0.93 },
    { code: "CNY", name: "Chinese Yuan", sign: "¥", rate: 7.34 },
    { code: "SEK", name: "Swedish Krona", sign: "kr", rate: 11.08 },
    { code: "NZD", name: "New Zealand Dollar", sign: "NZ$", rate: 1.64 },
    { code: "MXN", name: "Mexican Peso", sign: "$", rate: 17.6 },
    { code: "SGD", name: "Singapore Dollar", sign: "S$", rate: 1.37 },
    { code: "HKD", name: "Hong Kong Dollar", sign: "HK$", rate: 7.81 },
    { code: "NOK", name: "Norwegian Krone", sign: "kr", rate: 10.53 },
    { code: "KRW", name: "South Korean Won", sign: "₩", rate: 1442.5 },
  ];

  return (
    <div className="table-container">
      <h1 className="table-title">Currency Rates</h1>
      <table className="currency-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Sign</th>
            <th>Rate (1 USD)</th>
          </tr>
        </thead>
        <tbody>
          {currenciesData.map(c => (
            <tr key={c.code}>
              <td>{c.code}</td>
              <td>{c.name}</td>
              <td>{c.sign}</td>
              <td>{c.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
