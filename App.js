import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import s from "./App.css";
import AccountDetails from "./components/AccountsDetails";
import ModifyAccount from "./components/ModifyAccount";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>User Account</h1>
        <AccountDetails />
        <ModifyAccount />
      </div>
    </Provider>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);
