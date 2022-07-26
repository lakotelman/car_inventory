import React from "react";
import { Link } from "react-router-dom";

export default function Car(props) {
  function buildHeader() {
    let header;
    if (!props.hideLink) {
      header = (
        <h2>
          <Link to={"/inventory/" + props.car.id}>{props.car.name}</Link>
        </h2>
      );
    } else {
      header = <h2>{props.car.name}</h2>;
    }
    return header;
  }

  return (
    <div className="card">
      {buildHeader()}
      <p>Transmission: {props.car.transmission}</p>
      <p>Fuel: {props.car.fuel}</p>
      <p>Engine: {props.car.engine}</p>
      <p>Torque: {props.car.torque}</p>
      <p>Selling Price: ${props.car.selling_price}</p>
    </div>
  );
}
