const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());

app.get("/courses", (req, res) => {
  // Read the JSON file
  fs.readFile(path.join(__dirname, "courses.json"), "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading courses data" });
    }
    // Parse the JSON data and send it as a response
    const courses = JSON.parse(data);
    res.json(courses);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
