import { useState } from "react";
import memesData from "./memesData";

export default function Meme() {
  const [meme, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getMemeImage = () => {
    const memeArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    setMemeImage((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: memeArray[randomNumber].url,
      };
    });
  };

  return (
    <main className="meme ff-karla">
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
      <div className="flex meme--image-div">
        <img src={meme.randomImage} className="meme--image" alt="meme image" />
      </div>
    </main>
  );
}
