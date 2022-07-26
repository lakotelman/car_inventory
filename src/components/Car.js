import React from "react";
export default function Car(props) {
  return (
    <div className="card">
      <h2>{props.car.name}</h2>
      <p>Transmission: {props.car.transmission}</p>
      <p>Fuel: {props.car.fuel}</p>
      <p>Engine: {props.car.engine}</p>
      <p>Torque: {props.car.torque}</p>
      <p>Selling Price: ${props.car.selling_price}</p>
    </div>
  );
}
