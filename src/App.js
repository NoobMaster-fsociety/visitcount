import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <VisitCounter />
    </div>
  );
}

function VisitCounter() {
  const [visits, setVisits] = useState(0);

  // Loading from localStorage
  useEffect(() => {
    const storedVisits = Number(localStorage.getItem("visitCounter")) || 0;
    setVisits(storedVisits + 1);
  }, []);

  // Saving in localStorage
  useEffect(() => {
    localStorage.setItem("visitCounter", visits);
  }, [visits]);

  return (
    <div>
      <a href="https://www.free-counters.org/">Counter</a>
      <p>{visits}</p>
    </div>
  );
}
