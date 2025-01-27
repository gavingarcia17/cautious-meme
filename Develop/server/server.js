const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not set

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Middleware to handle 403 errors
app.use((req, res, next) => {
  const err = new Error('Forbidden');
  err.status = 403;
  next(err);
});

// Middleware to handle errors
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});