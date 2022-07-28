import React from "react";
import { createContext, useEffect, useState } from "react";
import firebase from "../firebase";
import {
  getFirestore,
  getDoc,
  collection,
  doc,
  getDocs,
} from "@firebase/firestore";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [cars, setCars] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, "cars");
      const collectionSnap = await getDocs(collectionRef);
      let carsArr = [];
      collectionSnap.forEach((docSnap) => {
        carsArr.push({ id: docSnap.id, ...docSnap.data() });
      });
      setCars(carsArr);
    };
    fetchData();
  }, []);

  const getSingleCar = async (id) => {
    const docRef = doc(db, "cars", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {
        ...docSnap.data(),
        id: docSnap.id,
      };
    } else {
      console.log("No data for you!");
    }
  };
  const values = {
    cars,
    getSingleCar,
  };
  return (
    <DataContext.Provider value={values}>{props.children}</DataContext.Provider>
  );
};
