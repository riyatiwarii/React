import React from "react";
import ReactDOM from "react-dom/client";

// const headingFirst = React.createElement("h1", {className:"heading-one"}, "Heading 1");
// const headingSecond = React.createElement("h1", {className:"heading-two"}, "Heading 2");
// const container = React.createElement("div", {id:"container"}, [headingFirst, headingSecond])
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(container)

// ***************

// import {createElement} from "react";
// import {createRoot} from "react-dom/client";

// const headingFirst = createElement("h1", {className:"heading-one"}, "Heading 1");
// const headingSecond = createElement("h1", {className:"heading-two"}, "Heading 2");
// const container = createElement("div", {id:"container"}, [headingFirst, headingSecond])
// const root = createRoot(document.getElementById("root"))
// root.render(container)

// ***************

// import {createElement as ce} from "react";
// import {createRoot as cr} from "react-dom/client";

// const headingFirst = ce("h1", {className:"heading-one"}, "Heading 1");
// const headingSecond = ce("h1", {className:"heading-two"}, "Heading 2");
// const container = ce("div", {id:"container"}, [headingFirst, headingSecond])
// const root = cr(document.getElementById("root"))
// root.render(container)

// JSX enters now 🔥

// import React from "react";
// import ReactDOM from "react-dom/client";

// const headingFirst = <h1>I am heading first.</h1>;
// const headingSecond = <h2>I am heading second.</h2>;
// const Container = () => (
//     <div>
//         {headingFirst}
//         {headingSecond}
//     </div>
// )
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<Container/>)

// ***************

// const HeadingFirst = () => (
//     <h1>I am heading first.</h1>
// );
// const HeadingSecond = () => (
//     <h2>I am heading second.</h2>
// );
// const Container = () => (
//     <div>
//         {/* {HeadingFirst()} */}
//         {/* {HeadingSecond()} */}
//         <HeadingFirst/>
//         <HeadingSecond/>
//     </div>
// )
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<Container/>)

const Title = () => (
    <h1>I fall in love with things around me like 👇💞🔥</h1>
)

const LoveList = () => (
    <>
    <ul>
        <li key = "li1">JavaScript</li>
        <li key = "li2">React</li>
        <li key = "li3">Parcel</li>
        <li key = "li4">Babel</li>
        <li key = "li5">JSX</li>
    </ul>
    <h2>Hey React</h2>
    {/* {"this is just a JS piece of code."} */}
    {"I love JavaScript" + 777}
    </>
)

const Body = () => (
    <>
    <Title/>
    <LoveList/>
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Body/>)
