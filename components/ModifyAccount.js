import React from "react";
import AmountContainer from "./AmountContainer";
import { useSelector } from "react-redux";

const ModifyAccount = () => {
  const { amount: store_amount, points: store_points } = useSelector(
    (state) => state
  );

  return (
    <div className="modifyAccount">
      <AmountContainer parameter="Amount" paramValue={store_amount.amount} />
      <AmountContainer parameter="Bonus" paramValue={store_points.points} />
    </div>
  );
};

export default ModifyAccount;
