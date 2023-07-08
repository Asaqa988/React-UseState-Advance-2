import React,{useState} from "react";

import '../components/Car.css'

function Car(props) {

  // this is to add to cart 

const [CarsTitle,CarTitleUpdate] = useState(props.CarName)


const AddtoCartHandelr=()=>{

  CarTitleUpdate(CarsTitle+" Added to Cart")


}

//finish the first function ----------------------------------------------------------------------------------


// this is to add 10% discuont to orginal price 

const [CarsOldPrice,CarsUpdatePrice] = useState(props.CarPrice)

const DiscountFunctionHandeler = ()=>{
  CarsUpdatePrice(CarsOldPrice-(CarsOldPrice*.10))
}



  return (


<div id="Main-Div"> 

    <div id="Car-Container">
      <h1> {CarsTitle}</h1>

      <h3> {CarsOldPrice}</h3>

      <img src={props.CarImage} />

      <button onClick={AddtoCartHandelr}> Add to Cart </button>
      <button onClick={DiscountFunctionHandeler}> Get 10% Discount </button>

    </div>
    </div>
  );
}

export default Car;
