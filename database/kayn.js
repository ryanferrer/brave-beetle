// This file interfaces directly to Riot's API through MY API key
// TODO: Cache any data into a JSON and copy/import into MongoDB

require('dotenv').config({ path: '../.env'});
const fs = require('fs');
const { Kayn, REGIONS } = require('kayn');
const kayn = Kayn(process.env.RIOT_LOL_API_KEY)();

// Move this to another js file later
// const getLatestMatch = (name) => {
//   kayn.Summoner.by.name(name)
//     .then((data) => {
//       console.log(data)
//     })
// }

// getLatestMatch('l Ryden l');

const getAllItems = (callback) => {
  kayn.DDragon.Item.list()
  .then((data) => {
    console.log('I got you all the Items from Riots API!!');
    callback(data);
  });
}

const getAllChampions = (callback) => {
  kayn.DDragon.Champion.list()
  .then((data) => {
      console.log('I got you all the champs from Riots API!');
      callback(data);
    })
}

const getItemByName = (name) => {
  kayn.DDragon.Item.list()
  .then(itemsList => {
    return itemsList.data
  })
  .then(items => {
    for (key in items) {
      console.log(items[key].name);
    }
  })
}

const getABoot = (callback) => {
  kayn.DDragon.Item.list()
  .then(itemsList => {
    return itemsList.data;
  })
  .then(items => {
    let bootsArray =[];
    for (key in items){
      if (items[key].name.includes("Boots") && !items[key].name.includes("Boots Of Speed")){
        bootsArray.push(items[key]);
      }
    }
    return bootsArray;
  })
  .then(bootsArray => {
    let random = Math.floor(bootsArray.length * Math.random());
    return bootsArray[random];
  })
  .then(boots => callback(boots))
  .catch(err => console.log(err));
}

module.exports = {
  getAllChampions,
  getAllItems,
  getABoot,
}