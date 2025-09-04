import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

function SwitchTheme() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const lightTheme = theme === "light"; // true
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          backgroundColor: lightTheme ? "#fff" : "#333",
          color: lightTheme ? "#333": "#fff",
        }}
      >
        <h1>{lightTheme ? "Light Mode" : "Dark Mode" }</h1>
        <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
      </div>
    </>
  );
}

export default SwitchTheme;
