import React, { Component } from "react";
import ReactDOM from "react-dom";

// import `.scss` files
import "./styles.scss";

// import
import Debug from "./components/Debug";
import Menu from "./components/Menu";
import Like, { convert as likeConvert } from "./components/Like/index.jsx";
import Teaser from "./components/Teaser/index.jsx";

document.addEventListener("DOMContentLoaded", (event) => {
  Debug();
  Menu();
  startReact("[component='like']", Like, likeConvert);
  startReact("[component='teaser']", Teaser);
});

// get all attributes
const getAllAttributes = (el) =>
  el.getAttributeNames().reduce(
    (obj, name) => ({
      ...obj,
      [name]: el.getAttribute(name),
    }),
    {}
  );

const startReact = (selector, component, propsConvert) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    // get props
    const { class: _, component: __, ...props } = getAllAttributes(element);
    // remove attributes
    [...element.attributes].forEach((attr) =>
      element.removeAttribute(attr.name)
    );
    // mount
    ReactDOM.render(
      React.createElement(
        component,
        propsConvert ? propsConvert(props) : props,
        null
      ),
      element
    );
  });
};
