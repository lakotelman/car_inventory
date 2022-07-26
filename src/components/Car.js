import React from "react";
export default function Car(props) {
  return (
    <div className="card">
      <h2>{props.car.title}</h2>
      <p>{props.car.text}</p>
    </div>
  );
}
