require('dotenv').config({ path: '../.env'});
const fs = require('fs');
const { Kayn, REGIONS } = require('kayn');
const kayn = Kayn(process.env.RIOT_LOL_API_KEY)();

const getAllItems = (callback) => {
  kayn.DDragon.Item.list()
  .then((items) => {
    console.log('I got you all the Items from Riots API!!');
    callback(JSON.stringify(items, null, 2));
  });
}

const getAllChampions = (callback) => {
  kayn.DDragon.Champion.list()
  .then((champions) => {
      console.log('I got you all the champs from Riots API!');
      callback(JSON.stringify(champions, null, 2));
    })
}

const writeItemsToFile = (itemsData) => {
  fs.writeFile('./output/LOLitems.json', itemsData, (err, res) => {
    if (err) console.log('error trying to write LOLitems to file');
    else {
      console.log('Items written!');
    }
  })
}

const writeChampionsToFile = (championsData) => {
  fs.writeFile('./output/LOLchampions.json', championsData, (err, res) => {
    if (err) console.log('error trying to write LOLChampions to file');
    else {
      console.log('Champions written!');
    }
  })
}

// cd into this files directory and node it to get JSON files from API requests

getAllItems(writeItemsToFile);
getAllChampions(writeChampionsToFile);