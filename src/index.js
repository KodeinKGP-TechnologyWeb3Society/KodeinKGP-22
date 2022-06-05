import ReactDOM from "react-dom";
import { Suspense } from "react";
import App from "./App";
import "./Components/LandingPage/LandingPage.css";

ReactDOM.render(
  <Suspense fallback={null}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
