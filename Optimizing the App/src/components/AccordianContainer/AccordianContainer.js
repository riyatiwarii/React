import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

const AccordianContainer = () => {
    const [ clicked, setClicked ] = useState(false)
    const handleToggle = (index) => {
        if(clicked === index){
            return setClicked(false)
        } else {
            setClicked(index)
        }
    }
    
    return (
        <div className="accordian-container">
        {
          Array(5).fill("").map((item, index) => {
            return <AccordianItem key={index} index = {index} clicked = {clicked} onToggle = {() => {handleToggle(index)}}/>
          })  
        }
        </div>
    )
}

export default AccordianContainer