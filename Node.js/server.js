const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/erc', async (req, res) => {
  try {
    const response = await axios.get('https://erc.hiconix.ru/yml/sets/extended/only_sets/all?token=862a3f9b04228e8c');
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
