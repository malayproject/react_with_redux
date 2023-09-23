import React, { useState } from "react";
import {
  decrementAmountByValue,
  decrementAmountValue,
  decrementPointsByValue,
  decrementPointsValue,
  incrementAmountByValue,
  incrementAmountValue,
  incrementPointsByValue,
  incrementPointsValue,
} from "../redux/actions";
import { useDispatch } from "react-redux";

const AmountContainer = ({ parameter, paramValue }) => {
  const [paramValueChange, setParamValueChange] = useState(0);
  const dispatch = useDispatch();
  console.log(typeof paramValue);
  console.log(typeof paramValueChange);
  const handleChange = (e) => {
    if (parseInt(e.target.value) < 0) return;
    setParamValueChange(parseInt(e.target.value));
  };

  const handleIncrement = () => {
    if (parameter === "Amount") dispatch(incrementAmountValue());
    else dispatch(incrementPointsValue());
  };

  const handleDecrement = () => {
    if (parameter === "Amount") dispatch(decrementAmountValue());
    else dispatch(decrementPointsValue());
  };

  const handleIncrementByValue = () => {
    if (parameter === "Amount")
      dispatch(incrementAmountByValue(paramValueChange));
    else dispatch(incrementPointsByValue(paramValueChange));
  };

  const handleDecrementByValue = () => {
    if (parameter === "Amount")
      dispatch(decrementAmountByValue(paramValueChange));
    else dispatch(decrementPointsByValue(paramValueChange));
  };

  return (
    <div className="amountContainer">
      <p
        style={{ fontSize: "2.5rem", margin: "1rem 0 1rem 0" }}
      >{`${parameter}: ${paramValue}`}</p>
      <div>
        <input
          type="number"
          value={paramValueChange}
          onChange={handleChange}
          style={{
            height: "3.5rem",
            border: "none",
            borderRadius: "0.5rem",
            fontSize: "2rem",
            margin: "1rem 0 3rem 0",
          }}
        ></input>
      </div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrementByValue}>Increment by value</button>
        <button onClick={handleDecrementByValue}>Decrement by value</button>
      </div>
    </div>
  );
};

export default AmountContainer;
