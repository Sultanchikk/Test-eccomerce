import React from "react";
import Logo from "../assets/Логотип (1).svg";
const Header = () => {
  return (
    <div className="main">
      <div className="header-main">
        <img src={Logo} alt="" />
        <div className="header-menu">
          <p>Мужские</p>
          <p>Женские</p>
          <p>Унисекс</p>
          <p>FAQ</p>
          <div className="header-button">
            <button>buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
