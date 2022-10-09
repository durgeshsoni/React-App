import React from "react";

function Masai() {
  const [counter, setCounter] = React.useState(5);

  const handleIcrement = (value) =>{
    setCounter(counter+value);
  }
  return (
    <center>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleIcrement(1)}>Add</button>
      <button onClick={() => handleIcrement(-1)}>Reduce</button>
    </center>
  );
}

export default Masai;
