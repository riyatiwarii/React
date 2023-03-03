import React from "react";
import ReactDOM from "react-dom/client";
const headingFirst = React.createElement("h1", {className:"heading-one"}, "Heading 1");
const headingSecond = React.createElement("h1", {className:"heading-two"}, "Heading 2");
const container = React.createElement("div", {id:"container"}, [headingFirst, headingSecond])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)

