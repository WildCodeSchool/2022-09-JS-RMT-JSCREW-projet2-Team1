import React from "react";

import "./Footer.css";

import PictoT from "../assets/twitter.png";
import PictoI from "../assets/insta.png";
import PictoF from "../assets/facebook.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="">
          <div className="d-flex justify-content-end m-2">
            <h1 className="">Partner site </h1>
          </div>
          <div className="d-flex justify-content-center m-3">
            <img src={PictoT} className="picto-rs m-2" alt="picto" />
            <img src={PictoI} className="picto-rs m-2" alt="picto" />
            <img src={PictoF} className="picto-rs m-2" alt="picto" />
          </div>

          <div className="text-center">
            © 2022 Copyright:
            <p className="text-reset fw-bold">Approuved by Professor Chen</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
