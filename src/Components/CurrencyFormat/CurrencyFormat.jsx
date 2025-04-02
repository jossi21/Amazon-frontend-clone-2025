import React from "react";
import numeral from "numeral";

const CurrencyFormat = ({ amount }) => {
  const currencyAmount = numeral(amount).format("$0, 0.00");
  return <div>{currencyAmount}</div>;
};

export default CurrencyFormat;
