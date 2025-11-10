import React, { useState } from "react";

const App = () => {
  const [expression, setExpression] = useState("");
  const [total, setTotal] = useState(0);

  const buttons = [
    0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75,
    4, 4.25, 4.5, 4.75, 5,
  ];

  const handleButtonClick = (value) => {
    setExpression((prev) => (prev ? `${prev} + ${value}` : `${value}`));
    setTotal((prev) => prev + value);
  };

  const handleReset = () => {
    setExpression("");
    setTotal(0);
  };

  const handleClearLast = () => {
    if (expression) {
      const lastValue = parseFloat(expression.split(" + ").slice(-1)[0]);
      setTotal((prev) => prev - lastValue);
      setExpression((prev) => prev.slice(0, prev.lastIndexOf(" + ")));
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(total);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-sm p-4 bg-gray-900 rounded-lg border border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-4 text-white">
          Teachers' Calculator
        </h1>
        <div className="bg-gray-800 p-4 rounded-lg mb-4 text-right">
          <div className="text-gray-400 text-lg mb-2 h-6">{expression}</div>
          <div className="text-6xl font-mono text-white">
            {total.toFixed(2)}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={handleReset}
            className="col-span-1 bg-gray-700 hover:bg-gray-600 rounded-lg p-4 text-2xl"
          >
            ↻
          </button>
          <button
            onClick={handleClearLast}
            className="col-span-1 bg-gray-700 hover:bg-gray-600 rounded-lg p-4 text-2xl"
          >
            ⌫
          </button>
          <button
            onClick={handleCopyToClipboard}
            className="col-span-2 bg-gray-700 hover:bg-gray-600 rounded-lg p-4 text-2xl"
          >
            🔗
          </button>
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="bg-blue-500 hover:bg-blue-400 rounded-lg p-4 text-2xl text-white"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
