import React, { useState, useRef, useEffect } from "react";
import { Clear, Save } from "@material-ui/icons";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  CardMedia,
} from "@material-ui/core";
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
import Webcam from "react-webcam";
const EmployeeForm = () => {
  const [open, setOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [savedImage, setSavedImage] = useState(null);
  const webcamRef = React.useRef(null);

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const handleSave = () => {
    setSavedImage(capturedImage);
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCapturedImage(null);
  };

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
  const [signature, setSignature] = useState(null);
  const signatureRef = useRef(null);

  const handleClear = () => {
    signatureRef.current.clear();
    setSignature(null);
  };

  const handleSavesignature = () => {
    if (signatureRef.current.isEmpty()) {
      return;
    }
    setSignature(signatureRef.current.toDataURL());
  };

  const [checked, setChecked] = useState(false); // state to keep track of checkbox state
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
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
          <>
            {!savedImage && (
              <>
                {!capturedImage && (
                  <IconButton className="camera-Button" onClick={handleClickOpen}>
                    <HiOutlineCamera className="camera-Icon" size={"10ch"} />
                  </IconButton>
                )}
                {capturedImage && (
                  <div onClick={handleClickOpen}>
                    <CardMedia
                      component="img"
                      alt="Captured Image"
                      image={capturedImage}
                    />
                  </div>
                )}
              </>
            )}
            {savedImage && (
              <CardMedia component="img" alt="Saved Image" image={savedImage} />
            )}
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Take a photo</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please click the capture button to take a photo.
                </DialogContentText>
                {capturedImage ? (
                  <CardMedia
                    component="img"
                    alt="Captured Image"
                    image={capturedImage}
                  />
                ) : (
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                  />
                )}
              </DialogContent>
              <DialogActions>
                {!capturedImage && (
                  <Button onClick={handleClose}>Cancel</Button>
                )}
                {capturedImage && (
                  <Button
                    onClick={handleClose}
                    color="primary"
                    variant="contained"
                  >
                    Close
                  </Button>
                )}
                {!capturedImage && (
                  <Button
                    onClick={handleCapture}
                    color="primary"
                    variant="contained"
                  >
                    Capture
                  </Button>
                )}
                {capturedImage && (
                  <Button
                    onClick={handleSave}
                    color="primary"
                    variant="contained"
                  >
                    Save
                  </Button>
                )}
              </DialogActions>
            </Dialog>
          </>
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

          <>
            {!signature && (
              <div style={{ border: "1px solid black", height: 200 }}>
                <SignatureCanvas
                  ref={signatureRef}
                  canvasProps={{ width: 500, height: 200 }}
                />
                <Button
                  onClick={handleClear}
                  variant="contained"
                  color="secondary"
                >
                  <Clear />
                  Clear
                </Button>
                <Button
                  onClick={handleSavesignature}
                  variant="contained"
                  color="primary"
                >
                  <Save />
                  Save
                </Button>
              </div>
            )}
            {signature && (
              <>
                <CardMedia
                  component="img"
                  alt="Saved Signature"
                  image={signature}
                  style={{ maxWidth: 500 }}
                />
                <Button
                  onClick={() => setSignature(null)}
                  variant="contained"
                  color="primary"
                >
                  Clear Signature
                </Button>
              </>
            )}
          </>
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
