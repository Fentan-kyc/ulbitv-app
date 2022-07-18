import React from "react";

function App() {

  let i = 0;

  function Plus() {
    i += 1
    console.log(i)
  }

  function Minus() {
    i -= 1
    console.log(i)
  }

  return (
    <div className="App">
      <h1>{i}</h1>
      <button onClick={In}>Plus</button>
      <button onClick={() => { i -= 1 }}>Minus</button>

    </div>
  );
}

export default App;
