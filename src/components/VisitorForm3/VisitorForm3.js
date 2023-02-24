import React, { useState, useRef } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@mui/styles';
import Canvas from "canvas";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Typography,Box } from "@mui/material";
import "./VisitorForm3.css";
import * as Icons from "react-icons/fa";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import SignatureCanvas from 'react-signature-canvas';
import styled from "@emotion/styled";
const VisitorForm3 = () => {
  // const canvasRef = useRef(null);
  // const [isDrawing, setIsDrawing] = useState(false);

  // const startDrawing = (event) => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext('2d');
  //   const { clientX, clientY } = event.touches ? event.touches[0] : event;
  //   ctx.beginPath();
  //   ctx.moveTo(clientX, clientY);
  //   setIsDrawing(true);
  // };

  // const continueDrawing = (event) => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext('2d');
  //   const { clientX, clientY } = event.touches ? event.touches[0] : event;
  //   if (isDrawing) {
  //     ctx.lineTo(clientX, clientY);
  //     ctx.stroke();
  //   }
  // };

  // const stopDrawing = () => {
  //   setIsDrawing(false);
  // };

  // const clearCanvas = () => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext('2d');
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  // };
  const signatureRef = useRef(null);

  const clearSignature = () => {
    signatureRef.current.clear();
  };

  const saveSignature = () => {
    const signatureImage = signatureRef.current.toDataURL();
    // Save the signature image to a database or send it to a server
    console.log(signatureImage);
  };
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [image, setImage] = useState(null);

  const handleStartCapture = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        setStream(stream);
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });
  };

  const handleStopCapture = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const handleCaptureImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
    const dataUrl = canvas.toDataURL("image/png");
    setImage(dataUrl);
    handleStopCapture();
  };
  
  const Navigate = useNavigate();

  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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

          <div>
            {stream ? (
              <div>
                <video ref={videoRef} autoPlay />
                <Button
                  onClick={handleCaptureImage}
                  variant="contained"
                  color="primary"
                >
                  Capture
                </Button>
                <Button
                  onClick={handleStopCapture}
                  variant="contained"
                  color="secondary"
                >
                  Stop
                </Button>
              </div>
            ) : (
              <div>
                <Input type="file" accept="image/*" />
                <Button
                  onClick={handleStartCapture}
                  variant="contained"
                  color="primary"
                >
                  Start Camera
                </Button>
              </div>
            )}
            {image && <img src={image} alt="Captured Image" />}
          </div>

          <RequiredTypography
            marginLeft="32px"
            variant="subtitle1"
            component="label"
            fontFamily={"Roboto, sans-serif"}
          >
            Signature
          </RequiredTypography>
          {/* <div>
      <Canvas
        ref={canvasRef}
        onTouchStart={startDrawing}
        onTouchMove={continueDrawing}
        onMouseDown={startDrawing}
        onMouseMove={continueDrawing}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        style={{ border: '1px solid black' }}
      />
      <div>
        <Button onClick={clearCanvas} variant="contained" color="primary">
          Clear
        </Button>
      </div>
    </div> */}
     <div>
      <SignatureCanvas ref={signatureRef} penColor="black" canvasProps={{width: 500, height: 200}} />
      <div>
        <button onClick={clearSignature}>Clear</button>
        <button onClick={saveSignature}>Save</button>
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
export default VisitorForm3;
