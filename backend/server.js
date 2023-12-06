const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// In-memory storage for simplicity (replace with a database in a real application)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Endpoint for user login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Find user in the in-memory storage
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // User found, send success response
    res.json({ success: true, message: 'Login successful' });
  } else {
    // User not found, send error response
    res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
