import React from "react";
import "./WelcomePage.css";
import Header from "../Header/Header";
import { useState, useRef, useEffect } from "react";
import * as Icons from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Modal,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
function WelcomePage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [listColor, setListColor] = useState([1, 2, 3]);
  const ref = useRef(null);
  const Navigate = useNavigate();

  const visitorPage = () => {
    Navigate(`/visitor-form`);
  };
  const guestPage = () => {
    Navigate(`/guest-form`);
  };
  const employeePage = () => {
    Navigate(`/employee-form`);
  };
  const longtermcontractorPage = () => {
    Navigate(`/long-term-contractor-form`);
  };
  const othersPage = () => {
    Navigate(`/contractor-form`);
  };

  const handleToggleClasslistRef = (ref) => {
    if (!ref.current) {
      return;
    }
    if (!ref.current.classList.contains("big-border")) {
      ref.current.classList.add("big-border");
    } else {
      ref.current.classList.remove("big-border");
      ref.current = null;
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      handleToggleClasslistRef(ref);
    };
    const element = document.getElementById("wrapper");
    element.addEventListener("click", handleOutsideClick);
    return () => {
      element.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="welcome-page">
        <Header />
        <h2 className="welcome-page-title1">Hi there!</h2>
        <h3 className="welcome-page-title2">Choose one option</h3>

        <div id="wrapper">
          <div className="item-color-wrapper">
            <div className="block1">
              <div
                className="visitors-block"
                onClick={(event) => {
                  handleToggleClasslistRef(ref);
                  event.stopPropagation();
                  ref.current = event.target;
                  handleToggleClasslistRef(ref);
                  visitorPage();
                }}
              >
                <div className="visitors-icon">
                  <Icons.FaUserAlt />
                </div>
                <p className="visitors-title">Visitors</p>
              </div>
            </div>

            <div
              className="guests-block"
              onClick={(event) => {
                handleToggleClasslistRef(ref);
                event.stopPropagation();
                ref.current = event.target;
                handleToggleClasslistRef(ref);
                guestPage();
              }}
            >
              <div className="guests-icon">
                <Icons.FaUserTie />
              </div>
              <p className="guests-title">Guests</p>
            </div>

            <div className="contractors-block" onClick={handleOpen}>
              <div className="contractors-icon">
                <Icons.FaUserCog />
              </div>
              <p className="contractors-title">Contractors</p>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ccbbef",
                  paddingLeft: "95px",
                  paddingRight: "95px",
                  paddingBottom: "20px",
                  paddingTop: "50px",
                  borderRadius: "50px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
              >
                <div className="modal-Title">
                  <h3
                    className="modal-title"
                    style={{
                      color: " #584bc7",
                      textDecoration: "underline",
                      width: "max-content",
                      fontSize:"larger"
                    }}
                  >
                    Choose one option
                  </h3>
                </div>
                <RadioGroup>
                  <FormControlLabel
                    value="option1"
                    control={<Radio />}
                    label="Employee"
                    onClick={employeePage}
                  />
                  <FormControlLabel
                    value="option2"
                    control={<Radio />}
                    label="Long term contractor"
                    onClick={longtermcontractorPage}
                  />
                  <FormControlLabel
                    value="option3"
                    control={<Radio />}
                    label="Others"
                    onClick={othersPage}
                  />
                </RadioGroup>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
