import React, { useState } from "react";
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  
  let [formData, setFormData] = useState({
    fullName: "",
    email: "",
    place: "",
    mobile: "",
    visitorPass:"",
    buildingPass: "",
    company: "",
    fromDate: "01-03-2023",
    purpose: "",
    host: null,
    subtypeId:"",
    visitorType:1,
    Image:"dsdsd",
    assets: null,
    idProof: "dsd",
    signature: "dsds",
   // declaration: "",
    // checkedA: false,
    // checkedB: false,
    // checkedC: false,
    // checkedD: false
  //  asset:[]
  });


  return (
    <Context.Provider value={{ formData, setFormData }}>
      {children}
    </Context.Provider>
  );
};
