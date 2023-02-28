import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import "./EmployeeForm.css";
import { Autocomplete } from "@material-ui/core";
import * as Icons from "react-icons/fa";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { AiOutlineMail } from "react-icons/ai";
import { MdPlace } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { HiOutlineCamera } from "react-icons/hi";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
import styled from "@emotion/styled";
const EmployeeForm = () => {
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

  const nextPage = () => {
    Navigate(`/checked-in-page`);
  };
  const previousPage = () => {
    Navigate(`/`);
  };
  const signatureRef = useRef(null);

  const clearSignature = () => {
    signatureRef.current.clear();
  };
  const [checked, setChecked] = useState(false); // state to keep track of checkbox state
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const saveSignature = () => {
    const signatureImage = signatureRef.current.toDataURL();
    // Save the signature image to a database or send it to a server
    console.log(signatureImage);
  };
  const RequiredTypography = styled(Typography)({
    "&::after": {
      content: '"*"',
      color: "red",
      marginLeft: 2,
    },
  });
  return (
    <div className="visitor-form">
      <Header />
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={350}
          margin="auto"
          marginTop={3}
          padding={5}
        >
          <HiOutlineCamera className="camera-Icon" size={"10ch"} />
          <Typography
            fontFamily={"Roboto, sans-serif"}
            variant="h4"
            padding={3}
            textAlign="center"
            style={{
              textDecoration: "underline",
              fontWeight: "300",
              textDecorationThickness: "from-font",
            }}
            fontSize={40}
          >
            Employee Form
          </Typography>
          <RequiredTypography
            marginLeft="32px"
            variant="subtitle1"
            component="label"
            fontFamily={"Roboto, sans-serif"}
          >
            Name
          </RequiredTypography>
          <Autocomplete
            popupIcon=""
            options={persons}
            getOptionLabel={(option) => option.name}
            getOptionSelected={(option, value) => option.id === value.id}
            filterOptions={filterOptions}
            onChange={(event, newValue) => {
              setPersonQuery(newValue ? newValue.name : "");
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{ m: 1, width: "35ch" }}
                placeholder="Search person"
                variant="outlined"
                onChange={(event) => {
                  setPersonQuery(event.target.value);
                }}
                value={personQuery}
              />
            )}
          />
          <RequiredTypography
            marginLeft="32px"
            variant="subtitle1"
            component="label"
            fontFamily={"Roboto, sans-serif"}
          >
            Visitor ID
          </RequiredTypography>
          <TextField
            placeholder="Enter visitor ID"
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
          <RequiredTypography
            marginLeft="32px"
            variant="subtitle1"
            component="label"
            fontFamily={"Roboto, sans-serif"}
          >
            Signature
          </RequiredTypography>

          <div className="signature-canvas">
            <SignatureCanvas
              ref={signatureRef}
              penColor="black"
              canvasProps={{ width: 300, height: 200, className: "sigCanvas" }}
              style={{ border: "1px solid black" }}
            />
            <div className="clear-save-btns">
              <button className="clear-btn" onClick={clearSignature}>
                Clear
              </button>
              <button className="save-btn" onClick={saveSignature}>
                Save
              </button>
            </div>
          </div>
          <div className="declaration-field">
            <FormControlLabel
              control={
                <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
              }
              label="I declare that the information provided is true and accurate."
            />
          </div>
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
              Check In
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
};
export default EmployeeForm;
