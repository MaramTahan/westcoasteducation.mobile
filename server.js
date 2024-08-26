const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route for /courses that sends JSON data
app.get('/courses', (req, res) => {
  res.json([
    {
      name: 'Introduction to JavaScript',
      courseNumber: 'JS101',
      startDate: '2024-09-01',
      endDate: '2024-12-15',
      placeStudy: 'Online',
      teacher: 'John Doe'
    },
    {
      name: 'Advanced CSS',
      courseNumber: 'CSS301',
      startDate: '2024-09-01',
      endDate: '2024-12-15',
      placeStudy: 'Campus',
      teacher: 'Jane Smith'
    }
  ]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
