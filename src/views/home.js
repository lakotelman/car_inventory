import React from "react"; 
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export default function Home() {
  const {user} = useContext(AuthContext)

  return (
    <div className="container">
      <h1>Home, sweet, home.</h1>
      <h2>Welcome {user.username}</h2>
    </div>
  );
}
