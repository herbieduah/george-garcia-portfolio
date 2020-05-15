import React from "react";
import Social from "./Social";

function Info({ name, job, description }) {
  return (
    <div className="george__info">
      <h1 className="george__name">{name}</h1>
      <h2 className="george__job">{job}</h2>
      <Desc />
      {/* <p class="george__copy">{description}</p> */}
      {/* <p class="george__copy">
        Currently at{" "}
        <a target="_blank" href="#poop">
          Copia
        </a>{" "}
        trying to end world hunger <br />
        one line of code at a time.
      </p> */}
      <a href="#" target="_blank" role="button" className="george__contact">
        Contact
      </a>
      <Social />
    </div>
  );
}

function Desc() {
  return (
    <p class="george__copy">
      Currently at{" "}
      <a target="_blank" href="#poop">
        Copia
      </a>{" "}
      trying to end world hunger <br />
      one line of code at a time.
    </p>
  );
}

export default Info;
