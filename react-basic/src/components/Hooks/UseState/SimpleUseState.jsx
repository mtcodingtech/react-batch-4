import React, { useState } from "react";

function SimpleUseState() {
  const [word, setWord] = useState("Hello World");
  return(
    <>
        <h2>{word}</h2>
        <button onClick={() => setWord("React JS")}>Change Word</button>
    </>
  );
}

export default SimpleUseState;
