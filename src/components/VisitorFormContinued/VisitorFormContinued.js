import React from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import "./VisitorFormContinued.css";
import * as Icons from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdPlace } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { HiOutlineCamera } from "react-icons/hi";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Header from "../Header/Header";
const VisitorFormContinued = () => {
  return (
    <div className="visitor-form-continued">
      <Header />
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={350}
          margin="auto"
          marginTop={"3"}
          padding={5}
        >
          <Typography marginLeft="32px" fontFamily={"Roboto, sans-serif"}>
            Building Visitor ID
          </Typography>
          <TextField
            placeholder="Enter your ID"
            id="name"
            name="name"
            margin="normal"
            type="text"
            variant="outlined"
            required
            sx={{ m: 1, width: "35ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <Icons.FaAddressCard className="id-Icon" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography marginLeft="32px"  fontFamily={"Roboto, sans-serif"}>Company</Typography>
          <TextField
            placeholder="Enter your organisation name"
            id="name"
            name="name"
            margin="normal"
            type="text"
            variant="outlined"
            required
            sx={{ m: 1, width: "35ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <Icons.FaBuilding className="building-Icon" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography marginLeft="32px"  fontFamily={"Roboto, sans-serif"}>Date of visit</Typography>
          <TextField
            placeholder="Select date"
            id="name"
            name="name"
            margin="normal"
            type="date"
            variant="outlined"
            required
            sx={{ m: 1, width: "35ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <BsCalendar2Date className="date-Icon" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography marginLeft="32px"  fontFamily={"Roboto, sans-serif"}>Purpose of visit</Typography>
          <TextField
            placeholder="Select purpose"
            id="name"
            name="name"
            margin="normal"
            type="text"
            variant="outlined"
            required
            sx={{ m: 1, width: "35ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <MdOutlineArrowDropDown className="dropdown-Icon" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Typography marginLeft="32px"  fontFamily={"Roboto, sans-serif"}>Person to meet</Typography>
          <TextField
            placeholder="Search here"
            id="name"
            name="name"
            margin="normal"
            type="text"
            variant="outlined"
            required
            sx={{ m: 1, width: "35ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <Icons.FaUser className="user-Icon" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </form>
    </div>
  );
};
export default VisitorFormContinued;
