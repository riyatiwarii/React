# Chapter 06 - Exploring the world
## Q: What are `Microservices` and `Monolith architecture` and the difference between them?

Microservices were used to overcome the challenges of monolithic architecture that prevailed initially in the market and also enables you to deploy independent services.

So, before we move on to what is Microservices in simple words, let’s see the architecture that prevailed initially in the market i.e. the Monolithic Architecture.

In layman terms, you can say that its similar to a big container wherein all the software components of an application are assembled together and tightly packaged.
Many challenges stemmed from this architecture:

* Inflexible – Monolithic applications cannot be built using different technologies 
* Unreliable – Even if one feature of the system does not work, then the entire system does not work
* Unscalable – Applications cannot be scaled easily since each time the application needs to be updated, the complete system has to be rebuilt
* Blocks Continous Development – Many features of the applications cannot be built and deployed at the same time
* Not Fit For Complex Applications – Features of complex applications have tightly coupled dependencies

`Microservice Architecture` takes birth to overcome all these challenges. 
### What exactly is Microservices?
Microservice is a small, loosely coupled distributed service. It allows you to take a large application and decompose or break it into easily manageable small components with narrowly defined responsibilities. It is considered the building block of modern applications. Microservices can be written in a variety of programming languages, and frameworks, and each service acts as a mini-application on its own.

![monolith-microservices](https://user-images.githubusercontent.com/102414072/225936928-2d132556-638c-4e11-aa0c-36aa4664a230.png)

The main difference we observe in the above diagram is that all the features initially were under a node.js API service sharing a single database. But then, with microservices, each feature was allotted a different microservice, handling their own data, and performing different functionalities. 

In today’s world, complexity has managed to creep into products. Microservice architecture promises to keep teams scaling and function better.
## Q: Why do we need a `useEffect Hook`?
The `useEffect` Hook lets you perform side effects in function components. Side effects are actions that can run alongside the main operations of a component, such as external API interactions, modifying state variables, and data fetching.

The useEffect hook accepts 2 arguments:

* A function with the code to run
* An array that contains a list of values from the component scope (props, context, and state variables), known as a dependency array, which tells the Hook to run every time its value is updated. If dependencies are empty, the Hook will run after every render.

```
useEffect(() => {}, [dependencies])
```

The function passed to useEffect is called an effect. It is called immediately after the component is rendered initially, and also after every re-render only if the dependencies have changed.

```
import { useState, useEffect } from 'react';
const MyComponent = (props) => {
    const [data, setData] = useState(null);
    useEffect(() => {fetch('https://my-api.com/data').then(response => response.json()).then(data => {setData(data);
        });
    }, []);
// passing empty array as second argument
    if (!data) {
    return <div>Loading...</div>;
    }
    return <div>{data.message}</div>;
};
```

The useEffect hook being used here to to fetch data from the API.
## Q: What is `Optional Chaining`?
Optional chaining is a new syntactic sugar introduced in JavaScript (added in ECMAScript 2020) to access an object's property or call a function without throwing an error by evaluating if the object accessed or function called using this operator is undefined or null.

```
const adventurer = {
  name: 'Riya',
  adventure: {
    name: 'Trekking'
  }
};

const myAdventure = adventurer.someNonExistentProperty?.name;
console.log(myAdventure);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
```
## Q: What is `Shimmer UI`?
A shimmer screen is a version of the UI that provides a better user experience since it doesn’t contain actual content. Instead, it mimics the page’s layout by showing its elements in a shape similar to the actual content as it is loading and becoming available (i.e. when network latency allows.)

## Q: What is the difference between `JS expression and JS statement`?
In short, expression is value, statement is behavior.

The following code define a `value`. It is a `statement` called `let statement` led by `let` keyword. Here `1` is an `expression`.

```
// statement
// |---------|
   let n = 1 ;
//        |-|
//        expression
```

The `for statement` led by `for` keyword. It comes with some nested expressions and statements.

```
//      expression(1)
//      |-----------|
   for (num in numArr) {                 //--+
                                         //  |
      sum += (num * 3); // statement(2)  //  |
//            |-----|                    //  |statement(1)
//            expression(2)              //  |
                                         //  |
   }   
```

So, a `statement` is an instruction unit telling computer **what to DO**. `for statement`, `while statement`, `if statement`, these are all actions, in other words, tasks or behaviors.

But in case of `expression`, **we are talking about values, valuables, objects, or some procedures that can produce a value, like function**.

So, Javascript also has function expression. Because function is a value. In the following code:

```
const rectArea = function(width, height) {
  return width * height;
};
```

* The entire snippet is a statement.
* Everything after `=` is an expression.
*`return width * height`; is nested statement.
* `width * height` is an expression.

## Q: What is `Error Boundaries` in react?

Error Boundaries were introduced in React v16 as a way to catch errors that occur in a rendering phase. In the past, the errors caused the app to unmount compeletly and user used to end up with the blank page which was not ideal. 

Error Boundaries provide a way to gracefully handle in React components instead of crashing the application and leave the users confused. With them, we can catch JavaScript runtime errors in our components, act on those errors, and display a fallback UI.

```
import ErrorBoundary from "error-boundary";

function Users() {
  return (
    <div>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary/>
    </div>
  )
}
```

Error boundaries do not catch errors for:

* Event handlers
* Asynchronous code
* Server-side rendering
* Errors thrown in the error boundary itself

There are a few rules to follow for a component to act as an error boundary:

* It must be a class component 
* It must define the usage of two methods that are available in React components: `static getDerivedStateFromError` and `componentDidCatch`

```
import React from 'react';

class MyErrorBoundaryExample extends React.Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI.
    return { error: error };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service
    logErrorToExampleService(error, info);
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <p>Something broke</p>;
    }
    return this.props.children;
  }
}

export default MyErrorBoundaryExample;
```

Static getDerivedStateFromError() is used to render a fallback UI after an error has been thrown, while componentDidCatch() is used to log those errors.

