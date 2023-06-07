# _Chapter 01 - Inception_

## Q: What is `Emmet`?
`Emmet` is a plug in for our text editor that allows you to type generate the HTML markup, CSS using Emmet Abbreviations. You can press Ctrl + Space to see the workflow of the code that will be generated(Inside a pop up).

## Q: Difference between a `Library and Framework`?
React is a `library` and Angular is a `framework`. Both libraries and frameworks give you an excellent approach to write DRY (don't repeat yourself) code.
The technical difference between a framework and a library lies in a term called `inversion of control`.
When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

[Ans Source Link](https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/)

## Q: What is `CDN`? Why do we use it?
`CDN` acronym stands for Content Delivery Network. It is a bunch of servers all around the world that host your files. For example, when a user visits a website, data from the website's server has to travel all across the internet to reach the user's computer. If the user is located far from the server then, it will take a long time to load a large file, such as a video or website image. So, this is where the CDN server holds the bigger stuff, the website content geographically closer to the users and thus, reduces the delay in communication created by network's design.

## Q: Why is `React known as React`?
React is known as React because it helps developers build user interfaces that are fast and responsive, or “reactive.” The React library was designed to “react” to changes in data. When data in a React application changes, the components that depend on that data are automatically updated, which allows for efficient and seamless updates to the user interface. The name “React” reflects this reactive nature of the library.

[Ans Source Link](https://medium.com/@dhawalpandya/why-is-react-called-react-92f83b10aeac)

## Q: What is `crossorigin in script tag`?
CORS acronym stands from **Cross Origin Resource Sharing**. It is a mechanism that allows a way for web pages to access API or assets from othet pages or different restricted domains.
The `crossorigin` attribute on a `<script>` tag specifies that CORS is supported to determine if it is safe for the server to allow access to the web page when loading an external script file from a third party server or domain.

## Q: What is difference between `React and ReactDOM`?
When we build React app, we use two packages- `React` and `ReactDOM`. The `React` package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The `ReactDOM` contains DOM-specific methods that implies itself as the glue between React and the DOM. Often, you will only use it for one single thing: mounting your application to the index.html file with ReactDOM.render().

### Why are they both separated?
The reason React and ReactDOM were split into two libraries was due to the arrival of React Native (A react platform for mobile development).
React components are such a great way to organize UI that it has now spread to mobile to react is used in web and in mobile. react-dom is used only in web apps. 

## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?
These links call the development libraries for React and ReactDOM. These can be opened and read, and are actually written with the intention of being understood by the developer who wrote it. Everything is properly documented with comments explaining the variables and the purpose of the functions. But this results in the file size growing significantly. For a site that is to be only used by the development team, it is fine. But for production, the file will take visibly too long to load.

```
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

The versions above are only meant for development, and are not suitable for production. Production codes are minified and optimized production versions of the same React file, but take us much less space, and hence are easily sent across the internet for usage by the common user who will not notice much smaller loading lag.

```
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```

[Ans Source Link](https://github.com/dhawal-pandya/Namaste-React/blob/main/Chapter%2001%20.%20Inception/7.%20react.development.js%20and%20react.production.js%20files.md)