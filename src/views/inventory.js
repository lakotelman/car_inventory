import React from "react";
import CarList from "../components/carlist";

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
