const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello, this is the smartest DevOps in the world – Hanan 👑');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
