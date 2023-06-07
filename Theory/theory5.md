# Chapter 05 - Let's get Hooked!

## Q: What is the difference between `Named export`, `Default export`, and `* as export`?
The `export` declaration is used to export values from a JavaScript module. Exported values can then be imported into other modules with the `import` declaration.

### Default export
`export default` syntax is used to do the default export in a module. It is possible to have one default export only per module. Default exported object can be imported with any name.

Example of export default
```
export default orders
```
When we import from default export we can specify any name we like. Following is an example:
```
// We can specify any name we like
import orderlist from "./filename"
// But it is recommended to write specific name for readablity
import orders from "./filename"
```

### Named export
`export <name>` syntax is used to do the named export in a module. It is possible to have multiple named export per module.

Example of named export
```
export orders
export cart
export payments
```
When we import we need to specify the exact name surrounded in braces like below:

Importing single export:
```
import {orders} from "./filename"
```
Importing multiple export:
```
import {orders, cart, payments} from "./filename"
```
Giving a different name:
```
// ex. giving a named import a different name by using "as":
import { paymentOptions as payments } from "./filename";
```

### Default export along with named imports
It is possible to use a default export along with named imports in the same statement.
```
import React, { useEffect, useState } from 'react';
```

### Namespace import
We have seen namespace import a lot when we import react. It is also possible to import everything from the file on an object. Following is an example of namespace import.
```
import * as React from "react";
import * as ReactDOM from "react-dom";
```

## Q: What is the importance of `config.js` file?
Modern-day JavaScript frameworks and libraries require config files. `Config.js file` stands for Configuration JS file that contains a list of initial parameters and settings that your project will need to get started. It could be anything, like a connection string to the database URL in different development environments, language settings, user settings, etc. 

However, if something is private or sensitive information, like API key, or Login credentials, it is advisable to put information in the .env file and not in a config file. By keeping these settings in a separate file, it makes it easier to manage and maintain your application, as you can change the settings in one place and have them propagate throughout your app instead of interacting with the bulk of them scattered throughout every folder, polluting your codebase.

*When developing an application, it is always advisable to write clean code that others can understand. Config files help you to achieve just that.*

## Q: What are `React Hooks`?
Hooks are a way of writing React components without classes; they also provide you ways to “hook” into the React core features such as state, controlling re-renders, etc., in functional components. With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

But just to give you a “feel” of it, here’s what code with Hooks looks like. Remember, all components are functional, and the code relevant to a component is defined inside it.

```
import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```

Yes, it’s said that the same Counter component would've been written umpteen times while using classes! But, the resulting code is much shorter than a class-based component — simply because Hooks capture and provide the same functionality succinctly. There are several types of hooks, and `useState()`is just one of them.

[Source link](https://geekflare.com/understanding-react-hooks/)

## Q: Why do we need `useState()` Hook?
The useState Hook allows you to create, update, and manipulate state inside functional components.

React has this concept of state, which are variables that hold data that our components depend on and may change over time. Whenever these variables change, React updates the UI by re-rendering the component in the DOM with the current values of the state variables.

The hook takes a single optional argument: an initial value for the state. Then it returns an array of two values:

* The state variable
* A function to update the state

### Syntax for useState hook

const [state, setState] = useState(initialstate);
