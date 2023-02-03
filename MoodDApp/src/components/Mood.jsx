import { useState } from "react";
import MoodContractABI from "../MoodContractABI";
export default function Mood() {
  const [currentMood, setCurrentMood] = useState({
    mood: "",
  });
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
    console.log(Mood);
  }

  // async function setMood(event) {
  //   const { name, value } = event.target;
  //   const setMoodPromise = MoodContract.setMood(value);
  //   await setMoodPromise;
  //   setCurrentMood((prevCurrentMood) => {
  //     return {
  //       mood: setMoodPromise,
  //     };
  //   });
  // }
  function handleChange(event) {
    setCurrentMood(event.target.value);
  }
  return (
    <div>
      <div className="card">
        <h1 className="title">Set your mood right!</h1>
        <p>Here we can set or get the mood:</p>
        <label htmlFor="mood">Input Mood:</label> <br />
        <input type="text" name="mood" onChange={handleChange} />
        <button onClick={getMood}>Get Mood</button>
        {/* <button onClick={setMood}>Set Mood</button> */}
        <h2>{currentMood}</h2>
      </div>
    </div>
  );
}
