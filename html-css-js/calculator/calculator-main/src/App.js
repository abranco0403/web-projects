import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [selectedOperator, setSelectedOperator] = useState(null);

  function performOperation(operator) {
    return function (e) {
      e.preventDefault();
      setSelectedOperator(operator);
    };
  }

  function calculateResult() {
    const inputValue = Number(inputRef.current.value);
    switch (selectedOperator) {
      case "+":
        setResult(result + inputValue);
        break;
      case "-":
        setResult(result - inputValue);
        break;
      case "*":
        setResult(result * inputValue);
        break;
      case "/":
        setResult(result / inputValue);
        break;
      default:
        break;
    }
    setSelectedOperator(null);
  }

  function changeSign(e) {
    e.preventDefault();
    setResult(result * -1);
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  }

  function resetResult(e) {
    e.preventDefault();
    inputRef.current.value = 0;
    setResult(0);
  }
  
  return (
    <div className="App max-w-screen-xl h-screen flex flex-col justify-center items-center bg-black">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        {/* <div className="text-3xl font-bold mb-4">Basic Calculator</div> */}
          <form className="flex flex-col items-center">
            <p ref={resultRef} className="text-2xl mb-4">
              {result}
            </p>
            <input
            className="w-full h-12 p-4 rounded-lg bg-slate-100"
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
          />
          <div className="mt-5 grid grid-cols-3">
            <button type="button" onClick={resetResult} className="btn-base bg-red-500">
              Clear
            </button>
            <button type="button" onClick={changeSign} className="btn-base">
              +/-</button>
            <button type="button" onClick={resetInput} className="btn-base">
              Reset
            </button>
            <button
              type="button"
              onClick={performOperation("/")}
              className={`btn-base ${selectedOperator === "/" ? "selected" : ""}`}
            >
              ÷
            </button>
            <button
              type="button"
              onClick={performOperation("-")}
              className={`btn-base ${selectedOperator === "-" ? "selected" : ""}`}
            >
              -
            </button>
            <button
              type="button"
              className={`btn-base bg-orange-400 row-span-2 ${selectedOperator === "=" ? "selected" : ""}`}
              onClick={calculateResult}
            >
              =
            </button>
            <button
              type="button"
              onClick={performOperation("*")}
              className={`btn-base ${selectedOperator === "*" ? "selected" : ""}`}
            >
              ×
            </button>
            <button
              type="button"
              onClick={performOperation("+")}
              className={`btn-base ${selectedOperator === "+" ? "selected" : ""}`}
            >
              +
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
