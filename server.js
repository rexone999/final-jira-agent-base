
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/atlassian-connect.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'atlassian-connect.json'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Server running on http://0.0.0.0:${port}`);
});
