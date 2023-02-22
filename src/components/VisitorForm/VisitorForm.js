import React from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import "./VisitorForm.css";
import * as Icons from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdPlace } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { HiOutlineCamera } from "react-icons/hi";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
const VisitorForm = () => {
  const Navigate = useNavigate();

  const nextPage = () => {
    Navigate(`/visitor-form-continued`);
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
    style={{textDecoration:"underline" ,fontWeight:"300"}}
            fontSize={40}
          >
            Visitor Form
          </Typography>
          <RequiredTypography
            marginLeft="32px"
            variant="subtitle1"
            component="label"
            
            fontFamily={"Roboto, sans-serif"}
          >
            Name
          </RequiredTypography>
          <TextField
          
            placeholder="Enter your name"
            id="name"
            name="name"
            margin="normal"
            type="text"
            variant="outlined"
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
              fontFamily:"Roboto, sans-serif",
              textTransform:"none"
            }}
            onClick={(event) => {
              nextPage();
            }}
            variant="contained"
          >
            Next
          </Button>
        </Box>
      </form>
    </div>
  );
};
export default VisitorForm;
