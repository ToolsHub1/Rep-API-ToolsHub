// app.js
const express = require('express');
require('dotenv').config();
const reputationRoutes = require('./routes/reputation');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Root route for health check
app.get('/', (req, res) => {
    res.send('Welcome to the Reputation Management API');
});

// Mount routes
app.use('/api/reputation', reputationRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
