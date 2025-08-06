import React, { useState } from "react";

function InputWithUseState() {
  const [inputText, setInputText] = useState("");
  
  const handleChange = (e) => {
    // console.log('e', e.target.value)
    setInputText(e.target.value)
  };
  return (
    <>
      <input type="text" onChange={handleChange} value={inputText} />

      <p>State: {inputText}</p>
      <button onClick={() => setInputText("")}>Reset</button>
    </>
  );
}

export default InputWithUseState;
