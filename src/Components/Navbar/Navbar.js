import React, { useState } from "react";
import "../Navbar/Navbar.css";
import useMediaquery from "../../Hooks/useMediaquery";
import close from "../../assets/close.svg";
import menu from "../../assets/list.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuToggled, setMenuToggled] = useState(false);
  const isDesktop = useMediaquery("(min-width:768px)");

  const navbarColor = {
    backgroundColor: "#000044",
    color: "white",
  };

  return (
    <div>
      {isDesktop ? (
        <div className="navbar" style={navbarColor}>
          <div className="logo">IMDB Clone</div>
          <div className="menu-links" style={navbarColor}>
            {[
              {
                name: "Home",
                path: "/home",
              },
              {
                name: "Add",
                path: "/add",
              },
              {
                name: "Logout",
                path: "",
              },
            ].map((menu, index) => {
              return (
                <span
                  style={navbarColor}
                  key={index}
                  className="menu-links-items"
                >
                  <Link to={menu.path}>{menu.name}</Link>
                </span>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="navbar" style={navbarColor}>
          <div className="logo">IMDB clone</div>
          <div className="menu-toggled" style={navbarColor}>
            <button
              onClick={() => {
                setMenuToggled(!isMenuToggled);
              }}
            >
              <img src={menu} width="15" height="15" alt="..." />
            </button>
          </div>
        </div>
      )}
      {!isDesktop && isMenuToggled && (
        <div className="toggled-menu" style={navbarColor}>
          <div style={navbarColor}>
            <div className="corner-button">
              <button
                onClick={() => {
                  setMenuToggled(!isMenuToggled);
                }}
              >
                <img src={close} width="15" height="15" alt="..." />
              </button>
            </div>
            <div className="toggled-menu-lists">
              {["Home", "Add", "Logout"].map((menu, index) => {
                return (
                  <span key={index} className="menu-links" style={navbarColor}>
                    {menu}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
