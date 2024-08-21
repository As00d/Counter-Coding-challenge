import { useState } from "react";

export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter(props) {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("nov 16 2000");
  date.setDate(date.getDate() + count);
  const handleStepMinus = function () {
    setStep((c) => c - 1);
  };
  const handleStepPlus = function () {
    setStep((c) => c + 1);
  };
  const handleCountMinus = function () {
    setCount((c) => c - step);
  };
  const handleCountPlus = function () {
    setCount((c) => c + step);
  };

  return (
    <>
      <button onClick={handleStepMinus}>-</button>
      <h2 style={{ display: "inline" }}>Step :{step}</h2>
      <button onClick={handleStepPlus}>+</button>
      <br />
      <button onClick={handleCountMinus}>-</button>
      <h2 style={{ display: "inline" }}>Count :{count}</h2>
      <button onClick={handleCountPlus}>+</button>
      <h2>
        {count === 0
          ? `today is ${date.toDateString()}`
          : `${count} days from today is ${date.toDateString()}`}
      </h2>
    </>
  );
}
