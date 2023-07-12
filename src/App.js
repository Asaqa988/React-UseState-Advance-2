import React, { useState } from "react";
import mercedceCar from "./assets/mercedes benz.jpg";
import MazdaCar from "./assets/Mazda.jpeg";
import KiaCar from "./assets/kia.jpg";
import ToytoaCar from "./assets/toyota_rav.webp";
import ExistingCars from "./components/ExistedCar";

import "./components/App.css";
import NewCarForm from "./components/NewCarForm";

function App() {
  const [carsData, setCarData] = useState([
    {
      carName: "Mercedes",
      carPrice: 220000,
      carImage: mercedceCar,
    },
    {
      carName: "Kia",
      carPrice: 220000,
      carImage: KiaCar,
    },
    {
      carName: "Mazda",
      carPrice: 220000,
      carImage: MazdaCar,
    },
    {
      carName: "Toyota",
      carPrice: 220000,
      carImage: ToytoaCar,
    },
  ]);

  const handelerCarSubmit = (newCar) => {
    setCarData([...carsData, newCar]);
  };

  return (
    <div>
      <NewCarForm onCarSubmit={handelerCarSubmit} />
      <ExistingCars cardata={carsData} />
    </div>
  );
}

export default App;
