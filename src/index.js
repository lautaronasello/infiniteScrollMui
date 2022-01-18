import React from "react";
import ReactDOM from "react-dom";
import MessageManager from "./messagemanager";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <MessageManager />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
