import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

// we are using component based system that is allowing us to render the specfic component into Page()
// in this we are defining different components as functions in various files and export them into Page()
// using inline loading defined in the HTML is causing the rendering problem. This is not an ideal way to run react in production
// by using npx create-react-app or npm create vite@latest we can use react to have its inbuilt development setup

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
ReactDOM.render(<Page />, document.getElementById("root"));
