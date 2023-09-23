import { useSelector } from "react-redux";

const AccountDetails = () => {
  const { amount: store_amount, points: store_points } = useSelector(
    (state) => state
  );

  return (
    <div className="accountDetails">
      <div className="accountParameter">Amount: {store_amount.amount}</div>
      <div className="accountParameter">
        Bonus points: {store_points.points}
      </div>
    </div>
  );
};

export default AccountDetails;
