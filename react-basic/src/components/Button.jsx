// rfce
// rface

import React from "react";
import { btnStyles } from "../utils/styles";

function Button({isMobile}) {
  const handleClick = () => {
    alert("Hello React");
  };
  const btnText = isMobile ? "Mobile Button" : "Desktop Button";
  return (
    <>
      {/* <button onClick={handleClick()}>Click</button> */}
      {/* <button onClick={handleClick}>Click</button> */}
      <button onClick={() => handleClick()} style={btnStyles(isMobile)}>{btnText}</button>
    </>
  );
}

export default Button;
