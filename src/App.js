import React from "react";
import VisitorCounter from "./VisitorCounter"; // Import your custom VisitorCounter component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Visitor Counter App</h1>
      </header>
      <main>
        <VisitorCounter /> {/* Render your VisitorCounter component */}
      </main>
      <footer>
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
}

export default App;
