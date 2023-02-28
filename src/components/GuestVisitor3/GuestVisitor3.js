import React, { useState, useRef } from "react";
import Input from "@material-ui/core/Input";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Webcam from "react-webcam";
import { IconButton, Paper } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Typography, Box } from "@mui/material";
import "./GuestVisitor3.css";
import * as Icons from "react-icons/fa";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
import styled from "@emotion/styled";
const GuestVisitor3 = () => {
  const webcamRef = useRef(null); // reference to the webcam component
  const [image, setImage] = useState(null); // state to store the captured image

  // function to capture an image from the webcam
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  const signatureRef = useRef(null);

  const clearSignature = () => {
    signatureRef.current.clear();
  };

  const saveSignature = () => {
    const signatureImage = signatureRef.current.toDataURL();
    // Save the signature image to a database or send it to a server
    console.log(signatureImage);
  };

  const Navigate = useNavigate();

  const [checked, setChecked] = useState(false); // state to keep track of checkbox state
  const [text, setText] = useState(""); // state to store text from TextField
  const handleCheckBoxChange = (event) => {
    setChecked({ ...state, [event.target.name]: event.target.checked });
  };

  // function to handle text field change
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  console.log("state", state);
  const nextPage = () => {
    Navigate(`/checked-in-page`);
  };
  const previousPage = () => {
    Navigate(`/guest-form2`);
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
          <RequiredTypography
            marginLeft="32px"
            variant="subtitle1"
            component="label"
            fontFamily={"Roboto, sans-serif"}
          >
            Personal belongings
          </RequiredTypography>
          <div className="check-box">
            <div className="first-row">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    color="primary"
                  />
                }
                label="Laptop"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="External storage devices"
              />
            </div>
            <div className="second-row">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedC}
                    onChange={handleChange}
                    name="checkedC"
                    color="primary"
                  />
                }
                label="Dongle"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedD}
                    onChange={handleChange}
                    name="checkedD"
                    color="primary"
                  />
                }
                label="Others"
              />
              {state.checkedD === true && (
                <TextField
                  label="Specify here"
                  value={text}
                  onChange={handleTextChange}
                />
              )}
            </div>
          </div>

          <RequiredTypography
            marginLeft="32px"
            variant="subtitle1"
            component="label"
            fontFamily={"Roboto, sans-serif"}
          >
            ID proof
          </RequiredTypography>

          <div className="live-image-capture">
            <Paper className="webcam-container">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
              />
            </Paper>
            <div className="capture-buttons">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#e9b30b",
                  "&:hover": {
                    backgroundColor: "#584bc7",
                  },
                }}
                onClick={capture}
              >
                Capture
              </Button>
              <IconButton
                sx={{
                  color: "#e9b30b",
                  "&:hover": {
                    color: "#584bc7",
                  },
                }}
                aria-label="capture"
                onClick={capture}
              >
                <PhotoCamera />
              </IconButton>
            </div>
            {image && (
              <div className="captured-image-container">
                <img src={image} alt="captured" className="captured-image" />
              </div>
            )}
          </div>

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
              previous
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
              Check in
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
};
export default GuestVisitor3;
