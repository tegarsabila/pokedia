import React from "react";
import notfound from "../assets/img/404.png";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <React.Fragment>
      <div class="containerNotfound">
        <h2>Oops! Page not found.</h2>
        <div class="Notfound">
          <div class="section1">
            <h1>4</h1>
          </div>
          <div class="section2">
            <img src={notfound} alt="" />
          </div>
          <div class="section3">
            <h1>4</h1>
          </div>
        </div>
        <p>We can't find the page you're looking for.</p>
        <Link to="/">
          <a>Go back!</a>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Notfound;

