require('dotenv').config({ path: '../.env'});
const fs = require('fs');
const { Kayn, REGIONS } = require('kayn');
const kayn = Kayn(process.env.RIOT_LOL_API_KEY)();

const getAllItems = (callback) => {
  kayn.DDragon.Item.list()
  .then((data) => {
    console.log('I got you all the Items from Riots API!!');
    callback(JSON.stringify(data.data));
  });
}

const getAllChampions = (callback) => {
  kayn.DDragon.Champion.list()
  .then((data) => {
      console.log('I got you all the champs from Riots API!');
      callback(JSON.stringify(data.data));
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

getAllItems(writeItemsToFile);
getAllChampions(writeChampionsToFile);