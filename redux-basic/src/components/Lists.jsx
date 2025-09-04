import React from "react";
import { useSelector } from "react-redux";

function Lists() {
  const books = useSelector((state) => state.books);
  console.log("List components", books);
  
  return <div>Lists</div>;
}

export default Lists;
