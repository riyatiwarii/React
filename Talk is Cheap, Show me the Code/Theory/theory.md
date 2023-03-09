# Chapter 04 - Talk is Cheap, show me the code
## Q: Is `JSX` mandatory for React?

### React Without JSX
JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment. Each JSX element is just syntactic sugar for calling `React.createElement(component, props, ...children)`. So, anything you can do with JSX can also be done with just plain JavaScript and need not be mandatory. However, you would definitely like to prefer `JSX` that makes your life easier with its `HTML-like syntax`.
## Q: Is `ES6` mandatory for React?
`ES6` is the 6th version of the ECMAScript programming language released in 2015. It is not mandatory to use ES6 in React since it can be typically done by installing the `create-react-class` module.
## Q: How can I write `comments` in JSX?
In JSX, the syntax for writing comments looks like this:
```
<header>
        {/*<h1>This is a comment.</h1>*/}
</header>
```
## Q: What is `<React.Fragment></React.Fragment>` and `<></>`?
A react component can return only one element. However, when you want to return multiple elements in a component, you need to have a single element as a parent wrapping the children elements. Using Fragment lets you do this.
```
<React.Fragment>
<h1>Welcome to the World of React</h1>
<h2>React is lovely and amazing.</h2>
</React.Fragment>
```
* If you inspect this example with the browser tools, you’ll see that `<h1>` and `<h2>` DOM nodes appear as siblings without wrapper around them.

* Instead of fragment, `div` could be there to wrap but `fragments` are useful because grouping elements with a Fragment has no effect on layout or styles, unlike if you wrapped the elements in some other container such as a DOM element.

* The empty JSX tag `<></>` is shorthand for `<React.Fragment></React.Fragment>` in most cases. However, we can't pass the `key` attribute in a shorthand syntax.

* So, `Fragments` let you group a list of children without adding extra nodes to the DOM.