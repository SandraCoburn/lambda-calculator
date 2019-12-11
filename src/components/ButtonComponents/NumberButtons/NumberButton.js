import React from "react";
import "./../NumberButtons/Numbers.css"
//import Numbers from "./Numbers";
import { numbers } from "./../../../data";


const NumberButton = () => {
console.log("this", numbers);
  return (
    <div className="button_container">
      <button name="C">C</button>
      <button name="x">X/-</button>
      <button name="%">%</button>
      <button name="/">/</button><br/>

      <button name="1">{numbers[0]}</button>
      <button name="2">2</button>
      <button name="3">3</button>
      <button name="X">x</button><br/>

      <button name="4">{numbers[3]}</button>
      <button name="5">5</button>
      <button name="6">6</button>
      <button name="-">-</button><br/>

      <button name="7">{numbers[6]}</button>
      <button name="8">8</button>
      <button name="9">9</button>
      <button name="+">+</button><br/>

      <button className="big_button">0</button>
      <button name=".">.</button>
      <button name="=">=</button>
     


    </div>
  );
};
export default NumberButton;
/* Display a button element rendering the data being passed down from the parent container on props */