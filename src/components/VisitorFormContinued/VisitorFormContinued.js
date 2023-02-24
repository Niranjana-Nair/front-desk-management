import React, { useState } from "react";
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
// import { makeStyles } from "@material-ui/core/styles";
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";
import { BsPencilFill } from "react-icons/bs";
import "./VisitorFormContinued.css";
import * as Icons from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import Header from "../Header/Header";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const VisitorFormContinued = () => {
  const Navigate = useNavigate();
  const today = new Date().toISOString().substr(0, 10);
 
  const previousPage = () => {
    Navigate(`/visitor-form`);
  };
  const nextPage = () => {
    Navigate(`/visitor-form3`);
  };

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
          <Typography marginLeft="32px" fontFamily={"Roboto, sans-serif"}>
            Company
          </Typography>
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
          <Typography marginLeft="32px" fontFamily={"Roboto, sans-serif"}>
            Date of visit
          </Typography>
          <TextField
          className="calender_date"
          disabled
            placeholder="Select date"
            type="date"
            defaultValue={today}
            id="todayDate"
            name="name"
            margin="normal"
            variant="outlined"
            required
            sx={{ m: 1, width: "35ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />

          <Typography marginLeft="32px" fontFamily={"Roboto, sans-serif"}>
            Purpose of visit
          </Typography>
          <TextField
            placeholder="Specify purpose"
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
                    
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
      

          <Typography marginLeft="32px" fontFamily={"Roboto, sans-serif"}>
            Person to meet
          </Typography>
          <TextField
            placeholder="Search here...."
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
          <div className="previous-and-back-btns">
            <Button
              className="previous-button"
              type="submit"
              sx={{
                marginTop: 3,
                borderRadius: 3,
                fontWeight: 900,
                backgroundColor: "#e9b30b",
                display: "block",
                marginLeft: "auto",
                width: "fit-content",
                fontFamily: "Roboto, sans-serif",
                textTransform: "none",
              }}
              onClick={(event) => {
                previousPage();
              }}
              variant="contained"
            >
              Previous
            </Button>

            <Button
              className="next-button"
              type="submit"
              sx={{
                marginTop: 3,
                borderRadius: 3,
                fontWeight: 900,
                backgroundColor: "#e9b30b",
                display: "block",
                marginLeft: "auto",
                width: "fit-content",
                fontFamily: "Roboto, sans-serif",
                textTransform: "none",
              }}
              onClick={(event) => {
                nextPage();
              }}
              variant="contained"
            >
              Next
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
};
export default VisitorFormContinued;
