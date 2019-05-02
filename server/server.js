const express = require('express');
const app = express();
const port = 4444;

app.use(express.static('dist'));

app.listen(port, () => console.log(`SCV Ready on ${port}!`));