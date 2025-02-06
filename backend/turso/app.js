const express = require('express');
const app = express();
const port = 3000;
import { createClient } from "@libsql/client";

// Middleware to parse JSON bodies
app.use(express.json());

// Define a POST endpoint
app.post('/read', (req, res) => {
  const { name, email } = req.body;
  res.json({ message: `User ${name} with email ${email} created!` });
});
// Define a POST endpoint
app.post('/write', (req, res) => {
  const { name, email } = req.body;
  res.json({ message: `User ${name} with email ${email} created!` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});