import React, { useState, useEffect } from 'react';

function App() {
  const [counterValue, setCounterValue] = useState(null);

  useEffect(() => {
    // Fetch data from the second source
    fetch('https://www.freevisitorcounters.com/en/home/counter/1078761/t/2')
      .then((response) => response.text())
      .then((html) => {
        // Extract the counter value from the HTML content
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const counterElement = doc.querySelector('.countElement');

        if (counterElement) {
          const counterText = counterElement.textContent;
          // Assuming the counter text is a number, you can parse it as needed
          const counter = parseInt(counterText, 10);
          setCounterValue(counter);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
  
      <p>Counter Value: {counterValue !== null ? counterValue : 'Loading data...'}</p>
      <script
        type='text/javascript'
        src='https://www.freevisitorcounters.com/auth.php?id=2026f6bb4c32910cb8b14fac0aabcbb9b26c2cbe'
      ></script>
      <script
        type='text/javascript'
        src='https://www.freevisitorcounters.com/en/home/counter/1078761/t/2'
      ></script>
    </div>
  );
}


export default App;
