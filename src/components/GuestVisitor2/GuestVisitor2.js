import React, { useEffect, useState } from "react";
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
//import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";
import { BsPencilFill } from "react-icons/bs";
//import "./VisitorFormContinued.css";
import "./GuestVisitor2.css";
import * as Icons from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Header from "../Header/Header";
import { Autocomplete } from "@material-ui/core";
import styled from "@emotion/styled";
// const useStyles = makeStyles((theme) => ({
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
// }));
const GuestVisitor2 = () => {
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
    Navigate(`/guest-form`);
  };
  const nextPage = () => {
    Navigate(`/guest-form3`);
  };
  const RequiredTypography = styled(Typography)({
    "&::after": {
      content: '"*"',
      color: "red",
      marginLeft: 2,
    },
  });
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
            Company
          </Typography>
          <TextField
            placeholder="Enter your organisation name"
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
                    <Icons.FaBuilding className="building-Icon" />
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
            Start Date
          </RequiredTypography>

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
            sx={{ m: 1, width: "35ch" }}
          />
          <RequiredTypography
            marginLeft="32px"
            variant="subtitle1"
            component="label"
            fontFamily={"Roboto, sans-serif"}
          >
            End Date
          </RequiredTypography>

          <TextField
            className="calender_date"
            placeholder="Select date"
            type="date"
            id="todayDate"
            name="name"
            margin="normal"
            variant="outlined"
            sx={{ m: 1, width: "35ch" }}
          />

          <Typography marginLeft="32px" fontFamily={"Roboto, sans-serif"}>
            Purpose of visit
          </Typography>
          <TextField
            placeholder="Specify purpose"
            id="name"
            name="name"
            margin="normal"
            type="text"
            variant="outlined"
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
export default GuestVisitor2;
