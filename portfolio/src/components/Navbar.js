import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="nav-container">
          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="fas fa-sliders-h"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active navs" href="#">
                  {" "}
                  Home
                </a>
                <a
                  className="nav-link navs"
                  href="https://github.com/Jacobjeevan/"
                >
                  Github
                </a>
                <a
                  className="nav-link navs"
                  href="https://www.linkedin.com/in/jeevanjacobjohn/"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
