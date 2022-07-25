import React, { Component } from "react";
import FoxPic from "./assets/images/FoxPic.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  {
    return (
      <div>
        <h1>Hey there.</h1>
        <img src={FoxPic} />
      </div>
    );
  }
}
