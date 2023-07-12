import React, { useState } from "react";

import "./App.css";

function NewCarForm({ onCarSubmit }) {
  const [carName, setCarName] = useState("");
  const [carPrice, setCarPrice] = useState("");

  const [carImage, setCarImage] = useState(null);

  const FormsubmitHandler = (e) => {
    e.preventDefault();
    const newCar = {
        carName: carName,
        carPrice: parseInt(carPrice),
      carImage: URL.createObjectURL(carImage),
    };
    onCarSubmit(newCar);

    setCarName("");
    setCarPrice("");
    setCarImage(null);

  };

  return (
    <div>
      <form onSubmit={FormsubmitHandler}>
        <label> please enter the car name </label>
        <input
          onChange={(e) => setCarName(e.target.value)}
          value={carName}
          type="text"
        />
        <br /> <br /> <br />
        <label> please enter the car price </label>
        <input
          onChange={(e) => setCarPrice(e.target.value)}
          value={carPrice}
          type="number"
        />
        <br /> <br /> <br />
        <label> please upload the car image </label>
        <input
          value={null}
          accept="image/*"
          onChange={(e) => setCarImage(e.target.files[0])}
          type="file"
        />
        <br /> <br /> <br />
        <button type="submit"> Add the New Car</button>
      </form>
    </div>
  );
}

export default NewCarForm;
