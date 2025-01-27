const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080; // Changed from 3000 to 8080

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});