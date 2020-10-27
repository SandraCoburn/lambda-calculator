import React from "react";
//import { specials } from "../../../data";
import "./../NumberButtons/Numbers.css";


const SpecialButton = (props) => {
  const special = props.special;
  const setDisNum = (specials) => {
    props.setDisplayNumberSpec(specials);
  }
  return (
    <button onClick={() => setDisNum(special)}>{special}</button>
      
  );
};
export default SpecialButton;
