import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Provider, useDispatch } from "react-redux";

import s from "./App.css";
import AccountDetails from "./components/AccountsDetails";
import ModifyAccount from "./components/ModifyAccount";
import store from "./redux/store";
import { initAmountValue, initPointsValue } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initAmountValue(2));
    dispatch(initPointsValue(2));
  }, []);
  return (
    <div className="app">
      <h1>User Account</h1>
      <AccountDetails />
      <ModifyAccount />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
