// for of loop
const students = [
  { name: "John", city: "New York" },
  { name: "Peter", city: "Paris" },
  { name: "Kate", city: "Sidney" },
];

for (const student of students) {
  console.log(student.name + " lives in " + student.city);
}

// spread operator
const shoppingList = ["eggs", "milk", "butter"];
const shoppingBasket = [...shoppingList, "bread", "pasta"];
console.log(shoppingBasket);

//function declaration
function breakfastMenu() {
  return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function () {
  return "I'm going to eat pizza for lunch";
};

// arrow functions
const dinnerMenu = (food) => `I'm going to eat a ${food} for dinner`;
console.log(dinnerMenu("chicken salad"));

// includes() function

const listIngredients = ["flour", "sugar", "eggs", "butter"];

if (listIngredients.includes("chocolate")) {
  console.log("We are going to make a chocolate cake");
} else {
  console.log(
    "We can't make a chocolate cake because we are missing the ingredient chocolate"
  );
}

// import export keywords
import { add } from "./data.js";

let result = add(3, 2);
console.log(result);

// classes in JS
class Player {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  state() {
    console.log(`${this.name} is born in ${this.country}`);
  }
}
const sachin = new Player("Sachin", "India");
sachin.state();

class TennisPlayer extends Player {
  constructor(name, country, age) {
    super(name, country);
    this.age = age;
  }

  define() {
    console.log(
      `${this.name} is ${this.age} years old and is born in ${this.country}`
    );
  }
}

const ronaldo = new TennisPlayer("Ronaldo", "Portugal", 69);
ronaldo.define();
