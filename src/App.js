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

  // Load the external scripts and update visits count
  useEffect(() => {
    // Create a script element for the first script
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.src = 'https://www.freevisitorcounters.com/auth.php?id=70286397094907d2c90bc29f4cf13085b1f81001';
    
    // Create a script element for the second script
    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = 'https://www.freevisitorcounters.com/en/home/counter/1078731/t/0';

    // Callback function to update visits count when scripts are loaded
    const updateVisitsFromScripts = () => {
      // Assuming the scripts update a global variable like 'visitorCountData'
      if (window.visitorCountData) {
        setVisits(window.visitorCountData.visits);
      }
    };

    // Once both scripts are loaded, call the callback function
    script1.onload = script2.onload = updateVisitsFromScripts;

    // Append the scripts to the document's head
    document.head.appendChild(script1);
    document.head.appendChild(script2);

    // Clean up by removing the scripts if the component unmounts
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <div>
      <a href="https://www.free-counters.org/">Counter</a>
      <p>Visits: {visits}</p>
    </div>
  );
}
