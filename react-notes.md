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

6. using Spread Operator ({...items}) while passing props : \

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

7. Props can take values of Variables, Arrays, Objects and even Functions

## State :

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

## Conditional Rendering :

1. What is "conditional rendering"?\
   When we want to only sometimes display something on the page
   based on a condition of some sort

2. When would you use &&?\
   When you want to either display something or NOT display it

3. When would you use a ternary?\
   When you need to decide which thing among 2 options to display

4. What if you need to decide between > 2 options on
   what to display?\
   Use an `if...else if... else` conditional or a `switch` statement

   Example : if we want to render something according to the condition in the data then we can put a '&&' operator to check the necessary condition

```
<div>
   {props.condition === true && <div>online<div/>}
</div>
```

## Forms in React :

1. We can use React States to get the user input in the forms. On any change in input, we can update the states on every key stroke

example :

```
export default function Form() {
    const [firstName, setFirstName] = useState("")
    function handleChange(event) {
        setFirstName(event.target.value)
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}
```

Above Component updates the state `firstName` at every change in keystroke in the input text field\

2. We can even take the whole input in the form of object instead of assigning a new variable for the form.
   example :

```
export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: ""}
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
```

here, `[event.target.name]` fixes the syntax error if not used the square brackets. Its a ES6 feature which allows to use the whole value as a string.

3. To [Submit the form](https://scrimba.com/learn/learnreact/forms-in-react-submitting-the-form-coe43436db60b0c21a1cca067) watch the video

4. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?\
   : Right before the form is submitted.

5. In a React app, when do you gather all the data from
   the filled-out form?\
   : As the form is being filled out. The data is all held in local state.

6. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?\
   : `name` property.

7. What's different about saving the data from a checkbox element
   vs. other form elements?\
   : A checkbox uses the `checked` property to determine what should
   be saved in state. Other form elements use the `value` property instead.

8. How do you watch for a form submit? How can you trigger
   a form submit?\

- Can watch for the submit with an onSubmit handler on the `form` element.
- Can trigger the form submit with a button click.

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
[React Forms](https://reactjs.org/docs/forms.html)
