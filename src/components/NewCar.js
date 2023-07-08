import React, { useState } from "react";

import "../components/NewCar.css";

function NewCar() {
/* انا ضفتهم عشان اخذ القيمة الحالية لكل 

input الي بتكون بالاصل فاضية 

*/


  const [CarName, setCarName] = useState("");
  const [CarPrice, setCarPrice] = useState("");
  const [CarImage, setCarImage] = useState("");


  /*
هون انا عملت 3 فنكشن 
كل وحدة جواتها فنكشن 
عشان اخلي هاي الفنكشن الدخليه تغير الاسم او السعر او الصورة حسب ما اليوزر بدخل 
معلومات 
والفنكشن الداخليه بتاخذ باراميتر 
الي هو شو القيمة الجديد 
وطالما في عندي
user.target.value
يعني القيمة الجديدة الي بدخلها اليوزر 



  */
  const carNameHandelerFunction = (event) => {
    setCarName(event.target.value);
  };

  const carPriceHandelerFunction = (event) => {
    setCarPrice(event.target.value);
  };

  const carPictureHandelerFunction = (event) => {
    setCarImage(event.target.value);
  };


 /*
هاد الجزء مسؤول انه لما اعمل 
submit for the form 

وظيفته كالتالي 
اولا 
prevent.Default() عشان اغير الاسلوب الافتراضي الي هو انه الداتا تنبعت وينعمل 
reload للصفحة 

const data : هاي عشان اقدر اخذ الداتا الي بداخليها اليوزر بشكل مرتب على شكل 
object بتكون من 
key, value 

هاي ال 3 فنكنش 


   setCarName("");
    setCarPrice("");
    setCarImage("");

    بترجع كل شي فاضي بعد ما اخذ الي بدي اياه من الفورم 


  */

  const formSubmitHandeler = (event) => {
    event.preventDefault();
    const data = {
      theCarNameByUser: CarName,
      theCarPriceByUser: CarPrice,
      theCarImageByUser: CarImage,
    };



    console.log(data);
    setCarName("");
    setCarPrice("");
    setCarImage("");
  };

/* 

هاد الجزء انا غيرت فيه شغلة صغير انه كل 
input 
ضفت لالها قيمة 
Value 

وبرضو ضفت لالها فنكنش اسمها 
onchange 
عشان اخذ القيمة الي بدخلها اليوزر وبعدين ارجع كل شي متل ما كان 


*/

  return (
    <div>
      <form onSubmit={formSubmitHandeler}>
        <label> Please enter the Car Name </label>
        <br />
        <input value={CarName} onChange={carNameHandelerFunction} type="text" />
        <br />
        <br />
        <br />

        <label> Please enter the Car Price </label>
        <br />
        <input
          value={CarPrice}
          onChange={carPriceHandelerFunction}
          type="text"
        />
        <br />
        <br />
        <br />

        <label> Please upload the Car Image </label>
        <br />
        <input
          value={CarImage}
          onChange={carPictureHandelerFunction}
          type="text"
        />
        <br />
        <br />
        <br />
        <button type="submit"> Submit Information </button>
        <br />

        <button type="reset"> reset Information </button>
      </form>
    </div>
  );
}

export default NewCar;
