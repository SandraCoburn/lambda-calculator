import React from "react";
//import { specials } from "../../../data";
import "./../NumberButtons/Numbers.css";


const SpecialButton = (props) => {
  const specials = props.specials;
  const setDisNum = (specials) => {
    props.setDisplayNumberSpec(specials);
  }
  return (
    <button onClick={() => setDisNum(specials)}>{specials}</button>
      
  );
};
export default SpecialButton;
