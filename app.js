const express = require('express');
const app = express();
const path = require('path'); // Require path module

const port = 3000;

// Serve static files before handling routes
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});