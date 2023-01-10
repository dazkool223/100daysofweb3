// promise

const arr = ["neeraj", "shivam", "atharva"];
const getData = (name) => {
  return new Promise((resolve, reject) => {
    if (arr.includes(name)) {
      resolve("found");
    } else {
      reject("not found");
    }
  });
};

getData("neeraj")
  .then((success) => console.log(success))
  .catch((error) => console.log(error));

// fetch
// RESTFul API example endpoints to play around - https://jsonplaceholder.typicode.com/
// Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

fetch("https://jsonplaceholder.typicode.com/comments/1")
  .then((response) => response.json())
  .then((data) => console.log(data.name));

fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "POST",
  body: JSON.stringify({
    postId: 2,
    name: "nee",
    email: "mail@mail.com",
    body: "baap ka dada ka sabka badla lega yeh tera faisal",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data.name));

//async and await with example of printing a random joke from the the api
const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data.value);
}

getJoke();
