import React from "react";
import Car from "./Car";

import MercedceCar from "../assets/mercedes benz.jpg";
import MazdaCar from "../assets/Mazda.jpeg";
import ToyotaCar from "../assets/toyota_rav.webp";

let CarsData = [
  { CarName: "Mercedece", CarPrice: 29000, CarImage: MercedceCar },
  { CarName: "Mazda", CarPrice: 17000, CarImage: MazdaCar },
  { CarName: "Toyota", CarPrice: 22000, CarImage: ToyotaCar },
];

function Cars() {
  return (
    <div id="Cars-Container">
      <Car
        CarName={CarsData[0].CarName}
        CarPrice={CarsData[0].CarPrice}
        CarImage={CarsData[0].CarImage}
      />
      <Car
        CarName={CarsData[1].CarName}
        CarPrice={CarsData[1].CarPrice}
        CarImage={CarsData[1].CarImage}
      />
      <Car
        CarName={CarsData[2].CarName}
        CarPrice={CarsData[2].CarPrice}
        CarImage={CarsData[2].CarImage}
      />
    </div>
  );
}

export default Cars;
<div></div>;
