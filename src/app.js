const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        error: 'Internal Server Error',
        message: err.message
    });
});

// Define routes
app.get('/', (req, res) => {
    res.send('Hello CI/CD workflow');
});

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
