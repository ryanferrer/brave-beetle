// This file interfaces directly to Riot's API through MY API key
// TODO: Cache any data into a JSON and copy/import into MongoDB

require('dotenv').config({ path: '../.env'});
const fs = require('fs');
const { Kayn, REGIONS } = require('kayn');
const kayn = Kayn(process.env.RIOT_LOL_API_KEY)();

// Randomly select 5 items that are NOT boots for player loadout
  // Seems very brittle
const getEquips = (callback) => {
  kayn.DDragon.Item.list()
  .then(itemsList => {
    return itemsList.data;
  })
  .then(items => {
    let equipsArray = [];
    for (key in items){
      if (!items[key].name.includes("Boots")){
        equipsArray.push(items[key])
      }
    }
    return equipsArray;
  })
  .then(equipsArray => {
    let lockinEquips = [];
    while (lockinEquips.length < 5){
      let random = Math.floor(equipsArray.length * Math.random());
      lockinEquips.push(equipsArray[random]);
    }
    return lockinEquips;
  })
  .then(data => callback(data));
}

// Randomly select 1 and only 1 pair of boots for player loadout
  // Seems very brittle
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

// Randomly select 1 and only 1 champion for the player to lock in as
const getAChampion = (callback) => {
  kayn.DDragon.Champion.list()
  .then(champsList => {
    return champsList.data;
  })
  .then(champions => {
    let champsArray = [];
    for (key in champions){
      champsArray.push(champions[key])
    }
    return champsArray;
  })
  .then(champsArray => {
    let random = Math.floor(champsArray.length * Math.random());
    return champsArray[random];
  })
  .then(champ => callback(champ));
}

//uncomment to test through terminal
// getAChampion(console.log);
// getABoot(console.log);
// getEquips(console.log);

module.exports = {
  getAChampion,
  getABoot,
  getEquips
}