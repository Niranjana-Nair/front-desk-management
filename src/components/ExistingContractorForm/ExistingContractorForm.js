import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import "./ExistingContractorForm.css";
import { Autocomplete } from "@material-ui/core";
import { BiSearchAlt } from "react-icons/bi";
import * as Icons from "react-icons/fa";

import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
import styled from "@emotion/styled";
const ExistingContractorForm = () => {
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
            Existing Contractor Form
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
                placeholder="Search employee"
                variant="outlined"
                onChange={(event) => {
                  setPersonQuery(event.target.value);
                }}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <BiSearchAlt className="search-Icon" />
                        </IconButton>
                      </InputAdornment>
                    ),
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
export default ExistingContractorForm;
