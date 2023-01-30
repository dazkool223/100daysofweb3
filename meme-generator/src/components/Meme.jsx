import { useState } from "react";
import memesData from "./memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    setMemeImage(memeArray[randomNumber].url);
  }

  return (
    <main className="grid meme ff-karla">
      <div className="grid form">
        <input
          type="text"
          className="ff-karla form--input"
          placeholder="Top Text"
        ></input>
        <input
          type="text"
          className="ff-karla form--input"
          placeholder="Bottom Text"
        ></input>
        <button
          type="submit"
          className="ff-karla form--button"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} className="meme--image" />
    </main>
  );
}
