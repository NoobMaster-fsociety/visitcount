// src/Counter.js
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch the visit count from the serverless function
    fetch("/visit-count")
      .then((response) => response.json())
      .then((data) => setCount(data.count))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Website Visit Counter</h1>
      <p>Total Visits: {count}</p>
    </div>
  );
}

export default Counter;
