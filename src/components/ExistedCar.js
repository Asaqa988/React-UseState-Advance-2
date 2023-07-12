import React from "react";

function ExistingCars({ cardata }) {
  return (
    <div id="Main-Div">
      <h2> Existing Cars </h2>

      {cardata.map((car, index) => (
        <div key={index}>
          <h3> {car.carName} </h3>
          <p> {car.carPrice} </p>
          <img src={car.carImage} alt={car.carName} />
        </div>
      ))}
    </div>
  );
}

export default ExistingCars;
