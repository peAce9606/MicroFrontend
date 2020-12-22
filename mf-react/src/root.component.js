import React from "react";
import "./root.css";
import logo from "./logo.svg";

export default function Root(props) {
  // return <section>{props.name} is mounted!</section>;
  return (
    <div class="app">
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        className="App-logo"
        alt="logo"
        width="40"
      />
      <div class="app__title">Rect Application</div>
    </div>
  );
}
