import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import "./VisitorForm.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  CardMedia,
} from "@material-ui/core";
import Webcam from "react-webcam";
import * as Icons from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdPlace } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { HiOutlineCamera } from "react-icons/hi";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Context } from "../../Context";
import { useContext } from "react";
const VisitorForm = () => {
  const { formData, setFormData } = useContext(Context);
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

  const Navigate = useNavigate();

  const nextPage = () => {
    Navigate(`/visitor-form-continued`);
  };
  const previousPage = () => {
    Navigate(`/`);
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
          {/* <HiOutlineCamera className="camera-Icon" size={"10ch"} /> */}
          <>
            {!savedImage && (
              <>
                {!capturedImage && (
                  <IconButton
                    className="camera-Button"
                    onClick={handleClickOpen}
                  >
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
            Visitor Form
          </Typography>
          {/* <RequiredTypography
            marginLeft="32px"
            variant="subtitle1"
            component="label"
            fontFamily={"Roboto, sans-serif"}
          >
            Name
          </RequiredTypography> */}
          <TextField
            onChange={(e) =>  setFormData({...formData, fullName:e.target.value}) }
            value={formData.fullName}
            placeholder="Enter your name"
            id="fullName"
            name="fullName"
            margin="normal"
            label="Name"
            type="text"
            variant="standard"
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
          <RequiredTypography
            marginLeft="32px"
            variant="subtitle1"
            component="label"
            fontFamily={"Roboto, sans-serif"}
          >
            Email
          </RequiredTypography>
          <TextField
            onChange={(e) =>  setFormData({...formData,email:e.target.value}) }
            value={formData.email}
            placeholder="Enter your email"
            id="email"
            name="email"
            margin="normal"
            type="text"
            variant="outlined"
            sx={{ m: 1, width: "35ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <AiOutlineMail className="email-Icon" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <RequiredTypography
            marginLeft="32px"
            variant="subtitle1"
            component="label"
            fontFamily={"Roboto, sans-serif"}
          >
            Place
          </RequiredTypography>
          <TextField
          onChange={(e) =>  setFormData({...formData, place:e.target.value}) }
          value={formData.place}
            placeholder="Enter your place"
            id="place"
            name="place"
            margin="normal"
            type="text"
            variant="outlined"
            sx={{ m: 1, width: "35ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <MdPlace className="location-Icon" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <RequiredTypography
            marginLeft="32px"
            variant="subtitle1"
            component="label"
            fontFamily={"Roboto, sans-serif"}
          >
            Mobile
          </RequiredTypography>
          <TextField
           onChange={(e) =>  setFormData({...formData, mobile:e.target.value}) }
           value={formData.mobile}
            placeholder="Enter your mobile number"
            id="mobile"
            name="mobile"
            margin="normal"
            type="text"
            variant="outlined"
            sx={{ m: 1, width: "35ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <BiPhone className="call-Icon" />
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
export default VisitorForm;
