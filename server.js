const express = require("express");
const app = express();
const port = process.env.PORT || 5000; // Use the provided port or default to 5000

let visitorCount = 0;

app.get("/api/visitor-count", (req, res) => {
  // Simulate a visitor count increase for demonstration purposes
  visitorCount += 1;
  console.log(`Visitor count increased to ${visitorCount}`);
  res.json({ count: visitorCount });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
