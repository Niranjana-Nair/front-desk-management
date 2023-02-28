import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import "./GuestVisitor.css";

import * as Icons from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdPlace } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { HiOutlineCamera } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../Header/Header";
const GuestVisitor = () => {
    const Navigate = useNavigate();

    const previousPage = () => {
        Navigate(`/`);
      };
      const nextPage = () => {
        Navigate(`/guest-form2`);
      };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState({
    name: "",
    email: "",
    place: "",
    mobile: "",
  });
  const RequiredTypography = styled(Typography)({
    "&::after": {
      content: '"*"',
      color: "red",
      marginLeft: 2,
    },
  });
  const handleNameChange = (e) => {
    setName(e.target.value);
    const nameregex = /^[A-Za-z]+$/i;
    if (!e.target.value) {
      setError((prevError) => ({
        ...prevError,
        name: "Name is required",
      }));
    } else if (e.target.value.length < 3) {
      setError((prevError) => ({
        ...prevError,
        name: "Name must have minimum length of 3 characters",
      }));
    } else if (!nameregex.test(e.target.value)) {
      setError((prevError) => ({
        ...prevError,
        name: "Invalid name. Only alphabets are allowed.",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        name: "",
      }));
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailregex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (!emailregex.test(e.target.value)) {
      setError((prevError) => ({
        ...prevError,
        email:
          "Invalid email address format. The format must be 'name@domain.com'.",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        email: "",
      }));
    }
  };

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
    if (e.target.value) {
      setError((prevError) => ({
        ...prevError,
        place: "",
      }));
    }
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    const mobilenumberpattern = /^(?!\s)[0-9]{10}$/;

    if (!mobilenumberpattern.test(e.target.value)) {
      setError((prevError) => ({
        ...prevError,
        mobile: "Please  enter valid Phone Number. It must have ten digits.",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        mobile: "",
      }));
    }
  };
  return (
    <div className="guest-form">
            <Header />
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={350}
          margin="auto"
          marginTop={10}
          padding={5}
        >
          <HiOutlineCamera className="camera-Icon" size={"10ch"} />
          <Typography
            fontFamily={"Roboto, sans-serif"}
            variant="h4"
            padding={3}
            textAlign="center"
            fontSize={40}
            style={{
              textDecoration: "underline",
              fontWeight: "300",
              textDecorationThickness: "from-font",
            }}
          >
            Guest Form
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
            onChange={handleNameChange}
            placeholder="Enter your Name"
            id="name"
            name="name"
            margin="normal"
            type="text"
            variant="outlined"
            value={name}
            helperText={error.name}
            error={error.name}
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
          <Typography
            marginLeft="32px"
            variant="subtitle1"
            component="label"
            fontFamily={"Roboto, sans-serif"}
          >
            Email
          </Typography>
          <TextField
            onChange={handleEmailChange}
            placeholder="Enter your Email"
            id="email"
            name="email"
            margin="normal"
            type="text"
            variant="outlined"
            value={email}
            helperText={error.email}
            error={error.email}
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
          <Typography
            marginLeft="32px"
            variant="subtitle1"
            component="label"
            fontFamily={"Roboto, sans-serif"}
          >
            Place
          </Typography>
          <TextField
            onChange={handlePlaceChange}
            placeholder="Enter your Place"
            id="place"
            name="place"
            margin="normal"
            type="text"
            variant="outlined"
            value={place}
            helperText={error.place}
            error={error.place}
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
          <Typography
            marginLeft="32px"
            variant="subtitle1"
            component="label"
            fontFamily={"Roboto, sans-serif"}
          >
            Mobile
          </Typography>
          <TextField
            onChange={handleMobileChange}
            placeholder="Enter your Mobile Number"
            id="mobile"
            name="mobile"
            margin="normal"
            type="text"
            variant="outlined"
            value={mobile}
            helperText={error.mobile}
            error={error.mobile}
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
export default GuestVisitor;
