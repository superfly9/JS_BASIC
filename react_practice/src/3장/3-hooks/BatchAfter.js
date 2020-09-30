import * as React from "react";
import { useState, useEffect } from "react";
import { unstable_batchedUpdates } from "react-dom";

// fake API with simulated latency
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: "Seoul",
        age: 500
      });
    }, 1000);
  });
}

export default function BatchAfter() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    fetchData().then(({ name, age }) => {
      unstable_batchedUpdates(() => {
        setName(name);
        setAge(age);
      });
    });
  }, []);

  return (
    <div className="App">
      <div>{`Name: ${name}`}</div>
      <div>{`Age: ${age}`}</div>
    </div>
  );
}
