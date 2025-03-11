const express = require('express');
const path = require('path');
const app = express();

// Serve static files (HTML, CSS, JS) from the root directory
app.use(express.static(__dirname));

// Serve images from the images folder
app.use('/images', express.static(path.join(__dirname, 'images')));

// Route to serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
