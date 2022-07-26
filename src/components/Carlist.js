import React from "react";
import { useState } from "react";
import Car from "./Car";

export default function CarList() {
  const [cars, setCars] = useState([
    {
      id: 0,
      title: "Mystery Machine",
      text: "Scooby Doo",
    },
    {
      id: 1,
      title: "Footmobile",
      text: "Flinstones",
    },
    {
      id: 2,
      title: "Flying Aerocar",
      text: "Jetsons",
    },
  ]);
  return (
    <>
      {cars.map((car, index) => (
        <Car car={car} key={index} />
      ))}
    </>
  );
}
