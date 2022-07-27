import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Car from "../components/Car";
import { DataContext } from "../contexts/DataProvider";

export default function InventorySingle() {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [postState, setPostState] = useState("Loading");
  const { getSingleCar } = useContext(DataContext);

  useEffect(() => {
    const queryCar = async () => {
      setCar(await getSingleCar(id));
      setPostState("Loaded");
    };
    queryCar();
  }, [id]);

  return (
    <>
      {postState === "Loaded" ? (
        <>
          <h1>This is a single blog</h1>
          <Post post={car} hideLink={true} />
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}
