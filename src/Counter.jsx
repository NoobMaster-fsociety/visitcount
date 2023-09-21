import React, { useState, useEffect } from "react";

function Counter() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Get visit count from localStorage
    let storedCount = localStorage.getItem("page_view");

    // Check if page_view entry is present
    if (storedCount) {
      storedCount = Number(storedCount) + 1;
      localStorage.setItem("page_view", storedCount);
    } else {
      storedCount = 1;
      localStorage.setItem("page_view", 1);
    }

    // Set the visitCount state to the retrieved or initialized count
    setVisitCount(storedCount);
  }, []);

  const resetCount = () => {
    localStorage.setItem("page_view", 1);
    setVisitCount(1);
  };

  return (
    <div>
      <title>Website Counter</title>{" "}
      {/* React does not handle the title like this */}
      <div>Website visit count:</div>
      <div className="website-counter">{visitCount}</div>
      <button id="reset" onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
