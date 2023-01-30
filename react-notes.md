# React

## Javascript Basics

You can find the basic syntax understanding [here](./Day%201-2/)

## .map() method

1. What does the `.map()` array method do?\
   Returns a new array. Whatever gets returned from the callback
   function provided is placed at the same index in the new array.
   Usually we take the items from the original array and modify them
   in some way.

2. What do we usually use `.map()` for in React?\
   Convert an array of raw data into an array of JSX elements
   that can be displayed on the page.

3. Why is using `.map()` better than just creating the components
   manually by typing them out?\
   It makes our code more "self-sustaining" - not requiring
   additional changes whenever the data changes.

### Ternery operator Syntax :

```
let answer = condition ? "Yes" : "No"
console.log(answer)
```

prints out the value of answer as "Yes" if the condition is true and "No" otherwise.

## JSX

1. Why do we need to `import React from "react"` in our files?\
   React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?\
   A JavaScript object. React elements that describe what React should
   eventually add to the real DOM for us.

3. What's wrong with this code:

```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```

We need our JSX to be nested under a single parent element

```
const page = (
   <div>
      <h1>Hello</h1>
      <p>This is my website!</p>
   <div/>
)
```

4. What does it mean for something to be "declarative" instead of "imperative"?\
   Declarative means I can tell the computer WHAT to do
   and expect it to handle the details. Imperative means I need
   to tell it HOW to do each step.

5. What does it mean for something to be "composable"?\
   We have small pieces that we can put together to make something
   larger/greater than the individual pieces.

## React properties (a.k.a props)

"Props" refers to the properties being passed into a component in order for it to work correctly, similar to how a function receives parameters: "from above." A component receiving props is not allowed to modify those props. (l.e. they are "immutable.")

1. What do props help us accomplish?\
   Make a component more reusable.

2. How do you pass a prop into a component?\
   `<MyAwesomeHeader title="???" />`

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. `<div blahblahblah={true}>`) Why or why not?\
   No, because the JSX we use to describe native DOM elements will
   be turned into REAL DOM elements by React. And real DOM elements
   only have the properties/attributes specified in the HTML specification.
   (Which doesn't include properties like `blahblahblah`)

4. How do I receive props in a component?\

```function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}
```

5. Usage of .map() while passing props : \
   .map() iterates over the array of data objects to render a component for each object.
   this is useful when the data changes automatically the components will get rendered

```
const comp = items.map((item)=>{
    <!-- perform operations on item -->
    return (<Component item={item}/>)
})
```

6. Conditional Rendering Example : \
   Example : if we want to render something according to the condition in the data then we can put a '&&' operator to check the necessary condition

```
<div>
   {props.condition === true && <div>online<div/>}
</div>
```

7. using Spread Operator ({...items}) while passing props : \

```
const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })
```

## State

"State" refers to values that are managed by the component, similar to variables declared inside a function. Any time you have changing values that should be saved/displayed, you'll likely be using state.

1. How would you describe the concept of "state"?\
   : A way for React to remember saved values from within a component.
   This is similar to declaring variables from within a component,
   with a few added bonuses

2. When would you want to use props instead of state?\
   : Anytime you want to pass data into a component so that
   component can determine what will get displayed on the
   screen.

3. When would you want to use state instead of props?\
   : Anytime you want a component to maintain some values from
   within the component. (And "remember" those values even
   when React re-renders the component)

4. Syntax for simple counter using useState() method

```
import {useState} from "react"
const [count, setCount] = useState(0)
```

5. Never use += or -= operator while dealing with state variable. Use the setter function while setting the updated value of the state variable\

6. if you ever need the old value of state to help you determine the new value of state,you should pass a callback function to your state setter function instead of using state directly. This callback function will receive the old value of state as its parameter,which you can then use to determine your new value of state. Directly using state variable is a bad practice in React.

```
setCount(prevCount = () => prevCount+1)
```

Pro Tip : Props are immutable. State is mutable.

## React with Vite

Create Vite app

```
npm create vite@latest
```

Run

```
cd app
npm i
npm run dev
```

## Miscellanous

[Adding svg icons to react](https://rb.gy/w9qik5)\
[Docs for Mouse Events](https://reactjs.org/docs/events.html#mouse-events)
[Ternery Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
