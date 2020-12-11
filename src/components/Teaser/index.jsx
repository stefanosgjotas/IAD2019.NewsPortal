import React, { useState } from "react";
import "./styles.scss";

const Teaser = ({ title, subtitle, src, type }) => {
  return (
    <div className={`teaser teaser--${type}`}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <img src={src} alt="Testbild" />
    </div>
  );
};

export default Teaser;
