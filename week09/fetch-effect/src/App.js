import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// Declared outside the react component to keep
// reference to that timeout/interval

function App() {
  const [numPublicRepos, setNumPublicRepos] = useState(0);

  fetch("https://api.github.com/orgs/microsoft")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div style={{ margin: "50px" }}>
      <input disabled="true" type="text" />
      <button type="button">&minus;</button>
      <button type="button">&#43;</button>
      <br />
      <br />
    </div>
  );
}

export default App;
