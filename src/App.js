import React from "react";
import Info from "./Info";
import dev from "./dev";
import qeorgeiPhone from "./assets/George-iPhone-X.png";
import "./App.scss";

function App() {
  const { name, job, description } = dev;
  return (
    <div className="george">
      <div className="col-50">
        <Info name={name} job={job} description={description} />
      </div>
      <div className="col-50">
        <img src={qeorgeiPhone} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
