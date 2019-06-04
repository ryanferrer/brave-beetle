const express = require('express');
const kayn = require('../database/kayn.js');
const cors = require('cors');
const app = express();
const port = 4444;

// Enabling CORS for localhost and development
app.use(cors());

app.use(express.static('dist'));



app.get('/lets', (req, res) => {
  res.send(this.bread);
})

app.get('/equips', (req, res) => {
  // Kayn method to get 5 items that are NOT boots
  kayn.getEquips((data) => {
    res.send(data);
  })
})

app.get('/boots', (req, res) => {
  kayn.getABoot((data) => {
    res.send(data);
  })
})

app.get('/champion', (req, res) => {
  kayn.getAChampion((data) => {
    res.send(data);
  })
})


app.listen(port, () => console.log(`SCV Ready on ${port}!`));