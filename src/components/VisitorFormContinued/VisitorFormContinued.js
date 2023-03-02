import React, { useState, useEffect } from "react";
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
import { makeStyles } from "@mui/styles";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import "./VisitorFormContinued.css";
import * as Icons from "react-icons/fa";
import Header from "../Header/Header";
import { Autocomplete } from "@material-ui/core";
import { Context } from "../../Context";
import { useContext } from 'react';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const VisitorFormContinued = () => {
  const [personQuery, setPersonQuery] = useState("");
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    // fetch persons from API or database
    // for this example, we'll use a static list of persons
    const personList = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
      { id: 3, name: "Bob Smith" },
      { id: 4, name: "Alice Johnson" },
    ];
    setPersons(personList);
  }, []);

  const filterOptions = (options, { inputValue }) => {
    return options.filter((option) =>
      option.name.toLowerCase().startsWith(inputValue.toLowerCase().slice(0, 3))
    );
  };

  const Navigate = useNavigate();
  const today = new Date().toISOString().substr(0, 10);

  const previousPage = () => {
    Navigate(`/visitor-form`);
  };
  const nextPage = () => {
    Navigate(`/visitor-form3`);
  };
  const { formData, setFormData } = useContext(Context);

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
          onChange={(e) =>  setFormData({...formData, buildingPass:e.target.value}) }
          value={formData.buildingPass}
            placeholder="Enter your ID"
            id="buildingPass"
            name="buildingPass"
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
             Visitor pass ID
          </Typography>
          <TextField
          onChange={(e) =>  setFormData({...formData, visitorPass:e.target.value}) }
          value={formData.visitorPass}
            placeholder="Enter visitor pass ID"
            id="visitorPass"
            name="visitorPass"
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
            onChange={(e) =>  setFormData({...formData, company:e.target.value}) }
            value={formData.company}
            placeholder="Enter your organisation name"
            id="company"
            name="company"
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
            id="fromDate"
            name="fromDate"
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
          onChange={(e) =>  setFormData({...formData, purpose:e.target.value}) }
          value={formData.purpose}
            placeholder="Specify purpose"
            id="purpose"
            name="purpose"
            margin="normal"
            type="text"
            variant="outlined"
            required
            sx={{ m: 1, width: "35ch" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <HiOutlinePencilAlt className="purpose-Icon" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Typography marginLeft="32px" fontFamily={"Roboto, sans-serif"}>
            Person to meet
          </Typography>
          <TextField
            onChange={(e) =>  setFormData({...formData, host:e.target.value}) }
            value={formData.host}
            placeholder="Search here...."
            id="host"
            name="host"
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
                "&:hover": {
                  backgroundColor: "#584bc7",
                },
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
                "&:hover": {
                  backgroundColor: "#584bc7",
                },
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
