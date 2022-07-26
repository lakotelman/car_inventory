import React from "react";
import CarList from "../components/Carlist";

export default function Inventory() {
  return (
    <>
      <div class="container">
        <h1>Your inventory.</h1>
        <CarList />
      </div>
    </>
  );
}
