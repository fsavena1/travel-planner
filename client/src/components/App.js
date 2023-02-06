import React, { useEffect, useState} from "react";

function App() {

  useEffect(() => {
    fetch("/user").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
        console.log(user)
        });
      }
    });
  }, []);

 
  return <div>
    <h1> HEllo</h1>
  </div>;
}

export default App;
