# Chapter 03 - Laying the Foundation
## Q: What is `JSX`?
`JSX` is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. It looks like this:
```
const element = <h1>Namaste JSX!</h1>;
```
In DOM manipulation, it was very hefty to write HTML using vanilla JS. React library came in with its api `createElement` heave the heftiness but it didn't cut the mustard for easier form of writing HTML. This is when `JSX` comes and It was built as syntactic sugar for `React.createElement()`
You can use any valid JavaScript Expression inside curly brackets in JSX.
```
const name = 'JSX';
const element = = <h1>Namaste {name}</h1>;
```

* Note, this is not HTML but only HTML like syntax. Also, JSX and React are two separate things. JSX produces React Elements and defines what UI looks like.
* Browsers don't understand JSX since it was never intended to run by JS engines. This requires a transpiler `Babel` to boil it down into a piece of JS code. After transpilation JSX expressions become like normal JS functions that are finally evaluated to plain JS objects. Therefore, JSX Expressions can be used and returned them from JS functions.

