import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Car from "../components/Car";

export default function InventorySingle() {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`
      );
      let result = await response.json();
      setCar(result);
    }
    fetchData();
  }, [id]);

  return (
    <>

      <div className="container">
          <Car car={car} hideLink={true}/>
      </div>
    </>
  );
}
