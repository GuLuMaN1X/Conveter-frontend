import { useState } from "react";

export default function CurrencyExchange() {
  return (
      <>
      <div className="container">
        <div className="left_side_1">
        <p className="text_table">Available Currency</p>

        <table className="table_1">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Sign</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>USD</td>
              <td>Dollar</td>
              <td>$</td>
            </tr>
            <tr>
              <td>EUR</td>
              <td>Euro</td>
              <td>€</td>
            </tr>
            <tr>
              <td>JPY</td>
              <td>Yen</td>
              <td>¥</td>
            </tr>
            <tr>
              <td>GBP</td>
              <td>Pound</td>
              <td>£</td>
            </tr>
            <tr>
              <td>AUD</td>
              <td>Australian Dollar</td>
              <td>A$</td>
            </tr>
            <tr>
              <td>USD</td>
              <td>Dollar</td>
              <td>$</td>
            </tr>
            <tr>
              <td>JPY</td>
              <td>Yen</td>
              <td>¥</td>
            </tr>
            <tr>
              <td>GBP</td>
              <td>Pound</td>
              <td>£</td>
            </tr>
            <tr>
              <td>JPY</td>
              <td>Yen</td>
              <td>¥</td>
            </tr>
            <tr>
              <td>GBP</td>
              <td>Pound</td>
              <td>£</td>
            </tr>
            <tr>
              <td>JPY</td>
              <td>Yen</td>
              <td>¥</td>
            </tr>
            <tr>
              <td>GBP</td>
              <td>Pound</td>
              <td>£</td>
            </tr>
            <tr>
              <td>JPY</td>
              <td>Yen</td>
              <td>¥</td>
            </tr>
            <tr>
              <td>GBP</td>
              <td>Pound</td>
              <td>£</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      </>
  );
}