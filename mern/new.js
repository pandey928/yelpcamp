// Importing required modules
const express = require('express');
const path = require('path');

// Create an Express app
const app = express();

// Define the port number
const PORT = 3000;

// Define a route to serve the HTML page
app.get('/', (req, res) => {
    // Send the HTML file as response
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
