import React, { useState, useEffect } from 'react';

function App() {
  const [counterData, setCounterData] = useState(null);

  useEffect(() => {
    // Fetch data from the first source
    fetch('https://www.free-counters.org/count/d1v9')
      .then((response) => response.json())
      .then((data) => {
        // Handle data from the first source
        setCounterData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    // Fetch data from the second source
    // You can use a similar approach for the second source
  }, []);

  return (
    <div>
      {counterData ? (
        <div>
          <p>Counter Value: {counterData.count}</p>
          {/* Render other data as needed */}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
