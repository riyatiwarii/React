# Chapter 03 - Laying the Foundation
## Q: What is `JSX`?
`JSX` is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. It looks like this:
```
const element = <h1>Namaste JSX!</h1>;
```
In DOM manipulation, it was very hefty to write HTML using vanilla JS. React library came in with its api `createElement` to heave the heftiness but it didn't cut the mustard for easier form of writing HTML. This is when `JSX` comes to make our life easier. It is an open-source contribution built as a syntactic sugar for `React.createElement().`
You can use any valid JavaScript Expression in JSX by enclosing it in curly braces`{...}`.
```
const name = 'JSX';
const element = = <h1>Namaste {name}</h1>;
```

* Note, this is not HTML but only HTML like syntax. Also, JSX and React are two separate things. JSX produces React Elements and defines what UI looks like.

* Browsers don't understand JSX since it was never intended to run by JS engines. This requires a transpiler `Babel` to boil it down into a piece of JS code. After transpilation,JSX expressions become like normal JS functions that are finally evaluated to plain JS objects. Therefore, JSX Expressions can be used and returned from JS functions.

## Q: Superpowers of `JSX`.
### JavaScript Expressions in JSX
Since JSX is a syntax extension to JavaScript you can use any valid JavaScript expression.

### Use JSX in an expression
After compilation JSX becomes regular JavaScript. JSX is an expression too, hence you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions.

```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```
### Security (XSS)
JSX prevents Injection Attacks like XSS. It is safe to embed user input like this:
```
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```
By default, React DOM escapes any values embedded in JSX before rendering them. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.
### JSX Represents Objects
Babel compiles JSX down to React.createElement() calls. With JSX you can React easily.

## Q: Role of `type` attribute in script tag? What options can I use there?

The `type` attribute of the `<script>` element indicates the type of content between the `<script>` and `</script>` tags. : a classic script, a JavaScript module, an import map, or a data block.

* Developers are encouraged to omit the attribute if the script refers to the default value `type="text/javascript"` which is JavaScript code rather than specify a MIME type.

* A script tag having `type="module"` attribute specifies that it to be considered as a Javascript module. A `module` is a .js file. Unlike normal javascript file, a module which specifies variables and functions imported from outside. Any `<script>` tag in HTML wanting to import a module needs to have the `type="module".
`
* A script tag having `type="text/babel"` attribute indicates that the script is a babel type and required bable to transpile it.

* A script tag having `type="text/typescript"` attribute indicates the script is written in `typescript.`

## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.


