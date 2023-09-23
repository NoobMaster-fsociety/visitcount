import React, { useState, useEffect } from 'react';

function App() {
  const [counterValue, setCounterValue] = useState(null);

  useEffect(() => {
    // Replace this URL with the actual URL of your counter data
    const counterDataURL = "https://www.freevisitorcounters.com/api/counter/1078757";

    fetch(counterDataURL)
      .then(response => response.json())
      .then(data => {
        const value = data.value; // Extract the counter value
        setCounterValue(value);
      })
      .catch(error => {
        console.error("Error fetching counter data:", error);
      });
  }, []);

  return (
    <div>
      <a href='https://www.free-counters.org/'>Counter</a>
      <p>Counter Value: {counterValue !== null ? counterValue : "Loading counter data..."}</p>
    </div>
  );
}

export default App;
