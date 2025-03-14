import { useState } from "react";
import "./App.css";

function App() {
  const [currentCoin, setCurrentCoin] = useState();
  const [numberOfHeads, setNumberOfHeads] = useState(0);
  const [numberOfTails, setNumberOfTails] = useState(0);

  const coinFaces = ["Head", "Tail"];
  function flipCoin() {
    let randomNum = Math.floor(Math.random() * coinFaces.length);
    const newCoin = coinFaces[randomNum];
    setCurrentCoin(newCoin);
    if (newCoin === coinFaces[0]) {
      setNumberOfHeads(numberOfHeads + 1);
    } else if (newCoin === coinFaces[1]) {
      setNumberOfTails(numberOfTails + 1);
    }
  }
  return (
    <>
      <h1>Coin Flipper</h1>
      <h2>Flip The Coin</h2>
      <h2 style={{ color: "purple" }}>{currentCoin}</h2>
      <button
        onClick={() => {
          flipCoin();
        }}
      >
        Flip me
      </button>
      <h3>
        Out of {numberOfHeads + numberOfTails} flips, there have been{" "}
        {numberOfHeads} heads and {numberOfTails} tails
      </h3>
    </>
  );
}

export default App;
