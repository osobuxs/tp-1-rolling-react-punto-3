import React, { useState } from "react";

function App(props) {
  const [msj, setMsj] = useState("");

  const handleClick = () => {
    setMsj("(from changed state)");
  };

  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "950px",
        margin: "0 auto",
        border: "1px solid #e6e6e6",
        padding: "40px 25px",
        marginTop: "50px",
      }}
    >
      <h1>
        Hello {props.name} {msj}!
      </h1>
      <button onClick={handleClick}>Change State</button>
    </div>
  );
}

export default App;
