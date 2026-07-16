const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// 1. Root Route (Fixes the "Cannot GET /" error)
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the Node.js User Assignment API!",
        status: "Running"
    });
});

// 2. Your New API Route
app.get('/api/user', (req, res) => {
    res.json({
        id: "KARTHIK-CPU838",
        role: "Developer",
        skills: ["Node.js", "Git", "JavaScript"],
        authorized: true
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
