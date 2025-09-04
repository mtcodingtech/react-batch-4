import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BooksList from "./components/BooksList";
import Lists from "./components/Lists";
import SwitchTheme from "./components/SwitchTheme";

function App() {
  return (
    <>
      <SwitchTheme />
      <BooksList />
    </>
  );
}

export default App;
