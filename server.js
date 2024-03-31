// Import necessary modules
const express = require('express');
const next = require('next');

// Create an Express.js app
const app = express();

// Define a route to handle POST requests to /api/contact
app.post('/api/contact', (req, res) => {
  // Here you can access the form data from req.body
  // Process the form data as needed (e.g., send an email)
  // Respond with appropriate status code and message
  res.status(200).json({ message: 'Contact form submitted successfully!' });
});

// Start the Next.js app
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  // Route all other requests to Next.js
  app.get('*', (req, res) => {
    return handle(req, res);
  });

  // Start the Express.js server
  const port = process.env.PORT || 3000;
  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server listening on port ${port}`);
  });
});
