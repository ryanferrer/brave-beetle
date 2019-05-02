const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Database connection error"));
db.once('open', ()=>{
  console.log('Connected to testDB');
});

const championSchema = mongoose.Schema({
  name: String,
  title: String,
  iconURL: String,
  iconId: Number,
  championId: Number
})

