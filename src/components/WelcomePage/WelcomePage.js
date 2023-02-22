import React from "react";
import "./WelcomePage.css";
import Header from "../Header/Header";
import { useState, useRef, useEffect } from "react";
import * as Icons from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const [listColor, setListColor] = useState([1, 2, 3]);
  const ref = useRef(null);
  const Navigate = useNavigate();

  const visitorPage = () => {
    Navigate(`/`);
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
              }}
            >
              <div className="guests-icon">
                <Icons.FaUserTie />
              </div>
              <p className="guests-title">Guests</p>
            </div>

            <div
              className="contractors-block"
              onClick={(event) => {
                handleToggleClasslistRef(ref);
                event.stopPropagation();
                ref.current = event.target;
                handleToggleClasslistRef(ref);
              }}
            >
              <div className="contractors-icon">
                <Icons.FaUserCog />
              </div>
              <p className="contractors-title">Contractors</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
