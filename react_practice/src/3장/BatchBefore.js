import * as React from "react";
import { useState, useEffect } from "react";

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

export default function BatchBefore() {
  const [{ name, age }, setUserProfile] = useState({
    name: "",
    age: 0
  });

  useEffect(() => {
    fetchData().then(({ name, age }) => {
      setUserProfile({ name, age });
    });
  }, []);

  return (
    <div className="App">
      <div>{`Name: ${name}`}</div>
      <div>{`Age: ${age}`}</div>
    </div>
  );
}
