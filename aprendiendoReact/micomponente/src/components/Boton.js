import React from "react";
import boton1 from "../images/boton1.png";
import { Link } from "react-router-dom";

const Boton = () => (
  <Link to="/Boton/new">
    <img src={boton1} />
  </Link>
);

export default Boton;
