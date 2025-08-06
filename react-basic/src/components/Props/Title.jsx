import React from "react";

function Title({ title }) {
  console.log(title);
  const heading = <h2>{title || "Heading"}</h2>;
  return <>{heading}</>;
}

export default Title;
