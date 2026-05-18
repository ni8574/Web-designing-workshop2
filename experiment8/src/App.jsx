import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 5);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>
          React Counter
          <br />
          Application
        </h1>

        <h2>{count}</h2>

        <div className="buttons">
          <button onClick={increment}>Increment (+)</button>

          <button onClick={decrement}>Decrement (-)</button>
        </div>

        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;