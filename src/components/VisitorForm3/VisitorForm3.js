import React, { useState, useRef } from "react";
import Input from "@material-ui/core/Input";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Webcam from "react-webcam";
import { IconButton, Paper } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { CameraAlt } from "@material-ui/icons";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Typography, Box } from "@mui/material";
import "./VisitorForm3.css";
import * as Icons from "react-icons/fa";
import Header from "../Header/Header";
import { Clear, Save } from "@material-ui/icons";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  CardMedia,
} from "@material-ui/core";

import { useNavigate } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
import styled from "@emotion/styled";
import { Context } from "../../Context";
import { useContext } from "react";
import { AddVisitor_url } from "../../services/Constants";
import axios from "axios";
import { toast } from "react-toastify";
const VisitorForm3 = () => {
  const { formData, setFormData } = useContext(Context);
  const webcamRef = useRef(null); // reference to the webcam component
  //const [image, setImage] = useState(null); // state to store the captured image

  // function to capture an image from the webcam
  const capture = () => {
   
    const imageSrc = webcamRef.current.getScreenshot();
    console.log("imageSrc", imageSrc);
    setFormData({ ...formData, idProof: imageSrc });
    console.log("image here", formData);

    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(imageSrc.split(",")[1]);

    // separate out the mime component
    var mimeString = imageSrc.split(",")[0].split(":")[1].split(";")[0];
    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);

    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    // write the ArrayBuffer to a blob, and you're done
    var blob = new File([ia], "fileName", {
      type: mimeString,
      lastModifiedDate: new Date(),
    });

    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    blob.lastModifiedDate = new Date();
    blob.name = "fileName";
    //Cast to a File() type
    //console.log(`input data size: ${datauriLength} Blob.size: ${blob.size}`);
    //setImage(imageSrc);
    console.log(blob);
  };

  // const [open, setOpen] = useState(false);
  // const [capturedImage, setCapturedImage] = useState(null);
  // const [savedImage, setSavedImage] = useState(null);
  // const webcamRef = useRef(null);

  // const handleCapture = () => {
  //   debugger
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   console.log("imageSrc",imageSrc);
  //   setCapturedImage(imageSrc);
  //   console.log("setCapturedImage",capturedImage);
  // };

  // const handleSave = () => {
  //   debugger
  //   setSavedImage(capturedImage);
  // console.log("setSavedImage", savedImage);
  //   handleClose();
  // };

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  //   setCapturedImage(null);
  // };

  const [signature, setSignature] = useState(null);
  const signatureRef = useRef(null);

  const handleClear = () => {
    signatureRef.current.clear();
    // setSignature(null);
    setFormData({ ...formData, signature: null });
  };

  const handleSavesignature = () => {
    if (signatureRef.current.isEmpty()) {
      return;
    }
    // setSignature(signatureRef.current.toDataURL());
    setFormData({ ...formData, signature: signatureRef.current.toDataURL() });
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
    console.log(event.target);
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
    Navigate(`/visitor-form-continued`);
  };
  const RequiredTypography = styled(Typography)({
    "&::after": {
      content: '"*"',
      color: "red",
      marginLeft: 2,
    },
  });

  const handle_AddVisitor_Api = () => {
    console.log("formData", formData);
    console.log("AddVisitor_url", AddVisitor_url);

    var data = {
      id : 12,
      name : "Test"
    }
   
    axios
      .post(AddVisitor_url, formData)
      .then((response) => {
        console.log("response", response);
        toast.success("Success");
        //Navigate(`/`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
              <Button variant="contained" color="primary" onClick={capture}>
                Capture
              </Button>
              <IconButton
                color="primary"
                aria-label="capture"
                onClick={capture}
              >
                <PhotoCamera />
              </IconButton>
            </div>
            {formData.idProof && (
              <div className="captured-image-container">
                <img
                  src={formData.idProof}
                  alt="captured"
                  className="captured-image"
                />
              </div>
            )}
          </div>
          {/* <>
            {!savedImage && (
              <>
                {!capturedImage && (
                  <IconButton onClick={handleClickOpen}>
                    <CameraAlt />
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
          </> */}
          <RequiredTypography
            marginLeft="32px"
            variant="subtitle1"
            component="label"
            fontFamily={"Roboto, sans-serif"}
          >
            Signature
          </RequiredTypography>

          <>
            {!formData.signature && (
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
            {formData.signature && (
              <>
                <CardMedia
                  component="img"
                  alt="Saved Signature"
                  image={formData.signature}
                  style={{ maxWidth: 500 }}
                />
                <Button
                  onClick={() => setFormData({ ...formData, signature: null })}
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
export default VisitorForm3;
