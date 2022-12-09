import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#A12344" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Store
      </NavLink>
      {" | "}
      <NavLink to="/shoppingcart" activeStyle={activeStyle}>
        Shopping Cart
      </NavLink>
    
    </nav>
  );
};

export default Header;
