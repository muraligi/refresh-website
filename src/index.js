import ReactDOM from "react-dom/client";
import ShopContextProvider from "./Context/ShopContext";
import App from "./App";
import "./index.css";
const myRoot1 = document.getElementById("root");
const myReactRoot1 = ReactDOM.createRoot(myRoot1);

myReactRoot1.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);
