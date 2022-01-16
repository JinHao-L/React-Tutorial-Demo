import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

export const Home = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isTiming, toggleIsTiming] = useState(false);

  const onClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  useEffect(() => {
    if (isTiming) {
      console.log("Timer started");
      const stopwatch = setInterval(() => {
        console.log("timer add");
        setTimer((prevTime) => prevTime + 1);
      }, 1000);

      return () => clearInterval(stopwatch);
    } else {
      console.log("Timer stopped");
    }
  }, [isTiming]);

  useEffect(() => {
    console.log("Stop counting");
  }, [count]);

  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <h2>Timer: {timer}</h2>
      <button onClick={() => toggleIsTiming((prev) => !prev)}>
        Start/Stop
      </button>
      <h2>Count: {count}</h2>
      <button onClick={() => onClick()}>Click me</button>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};
