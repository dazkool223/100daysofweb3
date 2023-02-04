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
  const handleClick = (event) => {
    const { name, value } = event.target;
    setMemeImage((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
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
          name="topText"
          onChange={handleClick}
          value={meme.topText}
        />
        <input
          type="text"
          className="ff-karla form--input"
          placeholder="Bottom Text"
          name="bottomText"
          onChange={handleClick}
          value={meme.bottomText}
        />
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
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
