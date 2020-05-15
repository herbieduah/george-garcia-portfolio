import React from "react";
import george_iphone from "./assets/George-iPhone-X.png";
import Social from "./Social";
import dev from "./dev";
import Info from "./Info";
import "./App.scss";

function App() {
  const { name, job, description } = dev;

  return (
    <div className="george">
      <div className="col-50">
        <Info name={name} job={job} description={description} />
      </div>

      <div className="col-50">
        <img src={george_iphone} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
