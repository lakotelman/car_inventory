import React, { useEffect } from "react";
import { useState } from "react";
import Car from "./Car";

export default function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
      async function fetchData() {
        const response = await fetch("https://my-json-server.typicode.com/Llang8/cars-api/cars");
        const result = await response.json()
        setCars(result)
      }
      fetchData();
  });

  return (
    <>
      <div class="cardGrid">
        {cars.map((car, index) => (
          <Car car={car} key={index} />
        ))}
      </div>
    </>
  );
}
