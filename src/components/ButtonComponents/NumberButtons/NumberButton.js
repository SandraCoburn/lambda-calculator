import React from "react";
 import "./../NumberButtons/Numbers.css"

//import { numbers } from "./../../../data";


const NumberButton = (props) => {
  const number = props.number;
  const setDisNum = (number) => {
    props.setDisplayNumber(number);
  }
  return (
    <button onClick={() => setDisNum(number)}>{number}</button>
  );
};
export default NumberButton;
/* Display a button element rendering the data being passed down from the parent container on props */