import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import VisitorFormContinued from "./components/VisitorFormContinued/VisitorFormContinued";
import VisitorForm from "./components/VisitorForm/VisitorForm";
import VisitorsList from "./components/Admin/VisitorList/VisitorsList";
import VisitorsList2 from "./components/Admin/VisitorsList2/VisitorsList2";
import VisitorForm3 from "./components/VisitorForm3/VisitorForm3";
import GuestVisitor from "./components/GuestVisitor/GuestVisitor";
import GuestVisitor2 from "./components/GuestVisitor2/GuestVisitor2";
import GuestVisitor3 from "./components/GuestVisitor3/GuestVisitor3";
import CheckedIn from "./components/CheckedIn/CheckedIn";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";
import ExistingContractorForm from "./components/ExistingContractorForm/ExistingContractorForm";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage/>}></Route>
        <Route path="/visitor-form-continued" element={<VisitorFormContinued/>}></Route>
        <Route path="/visitor-form3" element={<VisitorForm3/>}></Route>
        <Route path="/visitor-form" element={<VisitorForm/>}></Route>
        <Route path="/visitors-list" element={<VisitorsList/>}></Route>
        <Route path="/visitors-list-edit" element={<VisitorsList2/>}></Route>
        <Route path="/guest-form" element={<GuestVisitor/>}></Route>
        <Route path="/guest-form2" element={<GuestVisitor2/>}></Route>
        <Route path="/guest-form3" element={<GuestVisitor3/>}></Route>
        <Route path="/checked-in-page" element={<CheckedIn/>}></Route>
        <Route path="/employee-form" element={<EmployeeForm/>}></Route>
        <Route path="/existing-contractor-form" element={<ExistingContractorForm/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
