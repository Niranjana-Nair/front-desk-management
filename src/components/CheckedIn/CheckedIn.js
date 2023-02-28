import { Box } from "@mui/material";
import React from "react";
import Header from "../Header/Header";
import "./CheckedIn.css";
function CheckedIn() {
  return (
    <div className="checked-in-page">
      <Header />
     
      <Box display={"flex"} flexDirection={"column"} alignItems="center">
        <img alt="" src="/suyatii.png" className="suyatii-logo" />
        <p className="checked-in-Text">Successfully checked in!</p>
        <p className="checked-in-Title">Welcome to Suyati</p>
      </Box>
    </div>
  );
}

export default CheckedIn;
