import React from "react";

export default function CurrencyConversion(){

    return(
        <>
            <div className="right_side_1">
                <label for="email">Base currency</label>
                <input type="text"placeholder="USD" />
                <label for="email">Target currency</label>
                <input type="text"placeholder="USD" />
                <div className="two_in_one">
                <div className="one_input">
                <label for="email">Amount</label>
                <input type="text"placeholder="1.23" />
                </div>
                <div className="two_input">
                <label for="email">Converted amount</label>
                <input type="text" readOnly />
                </div>
                </div>
                <button>Convert</button>
            </div>
        </>
    )
}