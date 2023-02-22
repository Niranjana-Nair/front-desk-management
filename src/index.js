import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import VisitorFormContinued from "./components/VisitorFormContinued/VisitorFormContinued";
import VisitorForm from "./components/VisitorForm/VisitorForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
        <Route path="/visitor-form-continued" element={<VisitorFormContinued></VisitorFormContinued>}></Route>
        <Route path="/visitor-form" element={<VisitorForm></VisitorForm>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
