import React, { useState, useEffect } from "react";

function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch the visitor count from your server (or simulate it)
    // Replace this with your actual API endpoint
    fetch("/api/visitor-count")
      .then((response) => response.json())
      .then((data) => {
        setCount(data.count);
      })
      .catch((error) => {
        console.error("Error fetching visitor count:", error);
      });
  }, []);

  return (
    <div>
      <h2>Visitor Count: {count}</h2>
    </div>
  );
}

export default VisitorCounter;
