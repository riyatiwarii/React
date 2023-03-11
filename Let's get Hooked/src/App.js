import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import "./style.css"

// fetch("http://localhost:5500/Coding/response.json")
// .then(response => {
//    return response.json();
// })
// .then(data => console.log(data));

// import data from './response.json';
// console.log(data);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Body/>)

