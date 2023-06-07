## Q: Is `JSX` mandatory for React?
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
## Q: What is `Reconciliation` in React?
React uses `reconciliation` for this which is also known as a `diffing algorithm`, the algorithm React uses to diff one tree with another to determine which parts need to be changed. `Update`, A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

The central idea of React's API is to think of updates as if they cause the entire app to re-render. Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's prohibitively costly in terms of performance. React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called `reconciliation`.

Reconciliation algorithm works behind what is popularly understood as the `virtual DOM` : when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

### Key Points
* Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.

* Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

## Q: What is `React Fiber`?
`React Fiber` is the new reconciliation engine in React 16. Its main goal is to enable `incremental rendering` of the virtual DOM.

* The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

* Other key features include the ability to pause, abort, or reuse work as new updates come in.
## Q: Why do we need keys in React?
For example, we have a list of two items and we add another element at the end of the list.

```
<ul>
  <li>React</li>
  <li>Parcel</li>
</ul>

<ul>
  <li>React</li>
  <li>Parcel</li>
  <li>Babel</li>
</ul>
```
In such a case, React will have two trees for reconciling the difference, it does this iterating over both lists and generating a mutation. Here, it will match the first two element and then insert the third element which works well. Let's take another case now:

```
<ul>
  <li>React</li>
  <li>Parcel</li>
</ul>

<ul>
  <li>Babel</li>
  <li>React</li>
  <li>Parcel</li>
</ul>
```
When we insert an element in beginning of the list, the implementation will result in worse performance because React will mutate every child element instead of keeping the `<li>React</li>` and `<li>Parcel</li>` subtrees intact. This inefficiency can be a problem.

In order to solve this problem, React supports a `key` attribute to uniquely identify a list item among its siblings in the original tree with the same in the subsequent tree. The key only has to be unique among its siblings, not globally unique.
```
<ul>
  <li key = "R1">React</li>
  <li key = "P1">Parcel</li>
</ul>

<ul>
  <li key = "B1">Babel</li>
  <li key = "R1">React</li>
  <li key = "P1">Parcel</li>
</ul>
```
React will have to only update the element with new element.
## Q: Can we use index as keys in React?
Yes, `keys` can be used as an index in React but only recommended to use when we don't have unique id in the dataset present to assign value to key instead of no key attribute. Sounds like, something is better than nothing.

It is not recommended because if the list is changed, the index numbers of the elements will be also changed and React will not be able to match the elements based on the index numbers which are not stable identifiers.
## Q: What is `props in React`?
`Props`, a special keyword in React stand for `properties`. React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props ( `uni-direction flow` only). Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions into components like function arguments.

```
const Child = (props) => {
  return <h1>Hello, {props.name}</h1>;
}

const Parent = () => {
        return (
                <>
                <Child name={"JavaScript"}/>
                <Child name={"React"}/>
                <Child name={"Parcel"}/>
                <Child name={"Babel"}/>
                </>
        )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Parent/>)
```

The parent component renders the child components and the `name` prop is being passed from it to its child component. The child component displays the data being passed by the props later.

Important Note : `props` should be treated as read-only and should not be modified within a component. If a component needs to modify data, it should use state instead.

## Q: What is `Config Driven UI`?
`Config Driven UI` is based on the configurations of the data an application receives. By defining the UI structure and behavior through configuration files, UI designers can focus on designing the UI, while developers can focus on implementing the business logic that powers the UI. This approach also makes it easier to maintain and update UIs over time, as changes can be made in the configuration files rather than through extensive coding. Overall, config-driven UI can lead to more efficient and effective development processes and ultimately result in better user experiences.

## Q: Difference between `Virtual DOM` and `Real DOM`?
DOM (Document Object Model) and Virtual DOM (Virtual Document Object Model) are both ways of representing the structure of a web page in a tree-like structure, but they differ in their implementation and purpose.

When your application state transforms, the browser creates a DOM tree representing the structure of the page. The DOM tree can be manipulated through JavaScript, which allows for dynamic application . On the other hand, Virtual DOM is a programming concept that aims to make updates to the DOM more efficient. Instead of updating the entire DOM tree when a change is made to the application , the Virtual DOM creates a copy of the tree and compares it to the previous version of the tree. It then determines the difference between the two trees and updates only the parts that have changed rather than wasting time on the entire application state. This process is faster and more efficient than updating the entire DOM tree. This `Virtual DOM` kept in memory synced with `Real DOM` by a library such as ReactDOM is called reconciliation.
## Difference 
|   `Real DOM`    |   `Virtual DOM` |
|-------------|-----------------|
| DOM manipulation is very expensive  | DOM manipulation is very easy  | 
| There is too much memory wastage  | No memory wastage  |
| It updates Slow | It updates fast |
| It can directly update HTML | It can’t update HTML directly  |
|  Creates a new DOM if the element updates. | Updates the JSX if the element update |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the UI of your application | It is only a virtual representation of the DOM |
