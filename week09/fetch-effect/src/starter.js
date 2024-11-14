import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Declared outside the react component to keep
// reference to that timeout/interval

function App() {
  return (
    <div style={{ margin: "50px" }}>
      <input disabled="true" type="text" />
      <button type="button">&minus;</button>
      <button type="button">&#43;</button>
      <br />
      <br />
      <input type="text" value="hi" />
    </div>
  );
}

export default App;
