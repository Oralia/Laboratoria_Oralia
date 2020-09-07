import React from "react";
import chef from "../images/chef.png";
import "../styles/Paginaprincipal.css";

class Paginaprincipal extends React.Component {
  render() {
    return (
      <div>
        <div className="img">
          <img src={chef} />
        </div>
        <div></div>
      </div>
    );
  }
}

export default Paginaprincipal;
