const express = require('express');
const kayn = require('../database/getAssetsFromRiot.js')
const app = express();
const port = 4444;

app.get('/items', (req, res) => {
  kayn.getAllItems((data) => {
    res.send(data);
  });
})

app.get('/champions', (req, res) => {
  kayn.getAllChampions((data) => {
    // After getting the data, we need to cache it into a JSON
    // Or store it directly into MongoDB
    res.send(data);
  })
})

app.use(express.static('dist'));

app.listen(port, () => console.log(`SCV Ready on ${port}!`));