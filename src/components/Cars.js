import React, { useState } from "react";

import MercedceCar from "../assets/mercedes benz.jpg";
import MazdaCar from "../assets/Mazda.jpeg";
import ToyotaCar from "../assets/toyota_rav.webp";

import Kiacar from "../assets/kia.jpg";

const ExistingCars = ({ carsData }) => {
  return (
    <div>
      <h2>Existing Cars</h2>
      {carsData.map((car, index) => (
        <div key={index}>
          <h3>{car.CarName}</h3>
          <p>Price: ${car.CarPrice}</p>
          <img src={car.CarImage} alt={car.CarName} />
        </div>
      ))}
    </div>
  );
};

const NewCarForm = ({ onCarSubmit }) => {
  const [carName, setCarName] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [carImage, setCarImage] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newCar = {
      CarName: carName,
      CarPrice: parseInt(carPrice),
      CarImage: URL.createObjectURL(carImage),
    };

    onCarSubmit(newCar);

    setCarName("");
    setCarPrice("");
    setCarImage(null);
  };

  return (
    <div>
      <h1>Car Information</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Car Name:
          <input
            type="text"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Car Price:
          <input
            type="number"
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
          />
        </label>
        <br />
        <label>
          Car Image:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCarImage(e.target.files[0])}
          />
        </label>
        <br />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

const CarsPage = () => {
  const [carsData, setCarsData] = useState([
    { CarName: "Mercedece", CarPrice: 29000, CarImage: MercedceCar },
    { CarName: "Mazda", CarPrice: 17000, CarImage: MazdaCar },
    { CarName: "Toyota", CarPrice: 22000, CarImage: ToyotaCar },
    { CarName: "Kia", CarPrice: 15000, CarImage: Kiacar },
  ]);

  const handleCarSubmit = (newCar) => {
    setCarsData([...carsData, newCar]);
  };

  return (
    <div>
      <NewCarForm onCarSubmit={handleCarSubmit} />
      <ExistingCars carsData={carsData} />
    </div>
  );
};

export default CarsPage;
