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

    // Create a script element for the first script
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.src = 'https://www.freevisitorcounters.com/auth.php?id=70286397094907d2c90bc29f4cf13085b1f81001';
    
    // Create a script element for the second script
    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = 'https://www.freevisitorcounters.com/en/home/counter/1078731/t/0';

    // Append the scripts to the document's head
    document.head.appendChild(script1);
    document.head.appendChild(script2);

    // Clean up: remove the scripts when the component unmounts
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  // Saving in localStorage
  useEffect(() => {
    localStorage.setItem("visitCounter", visits);
  }, [visits]);

  return <p>{visits}</p>;
}
