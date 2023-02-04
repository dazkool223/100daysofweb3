import { useState } from "react";
import MoodContractABI from "../MoodContractABI";
export default function Mood() {
  const [currentMood, setCurrentMood] = useState("");
  const [inputMood, setInputMood] = useState("");
  const MoodContractAddress = "0x13DDdf0312103fCDf03B28ed853386687f8A2bf7";
  const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
  let signer;
  let MoodContract;

  provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then(function (accounts) {
      signer = provider.getSigner(accounts[0]);
      MoodContract = new ethers.Contract(
        MoodContractAddress,
        MoodContractABI,
        signer
      );
    });
  });
  async function getMood() {
    const getMoodPromise = MoodContract.getMood();
    const Mood = await getMoodPromise;
    setCurrentMood(Mood);
    console.log(Mood);
  }

  async function setMood(event) {
    const setMoodPromise = MoodContract.setMood(inputMood);
    await setMoodPromise;
  }
  function handleChange(event) {
    setInputMood(event.target.value);
  }
  return (
    <div className="card ff-signika">
      <h1 className="title">Set your mood right!</h1>
      <p className="para">Here we can set or get the mood:</p>
      <input
        type="text"
        name="mood"
        onChange={handleChange}
        className="form--input"
      />
      <button onClick={getMood} className="form--button ff-signika">
        Get Mood
      </button>
      <button onClick={setMood} className="form--button ff-signika">
        Set Mood
      </button>
      <h2>{currentMood}</h2>
    </div>
  );
}
