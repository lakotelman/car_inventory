import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Car from "./Car";
import { DataContext } from "../contexts/DataProvider";

export default function CarList() {
  const { cars } = useContext(DataContext);
  return (
    <>
      <div className="cardGrid">
        {cars.map((car, index) => (
          <Car car={car} key={index} />
        ))}
      </div>
    </>
  );
}
