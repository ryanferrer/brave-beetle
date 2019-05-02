require('dotenv').config({ path: '../.env'});
const fs = require('fs');
const { Kayn, REGIONS } = require('kayn');
const kayn = Kayn(process.env.RIOT_LOL_API_KEY)();

const getLatestMatch = (name) => {
  kayn.Summoner.by.name(name)
    .then((data) => {
      console.log(data)
    })
}

// getLatestMatch('l Ryden l');

const getAllItems = () => {
  kayn.DDragon.Item.list()
  .then((data) => {
    console.log(data)
  });
}

const getAllChampions = () => {
  kayn.DDragon.Champion.list()
  .then((data) => {
      console.log(data);
    })
}

/*
  DDragon.Champion.list() returns the object list of champions

  Object model = {
    type:
    version:
    format:
    data:
  }

  we're interested in the data.

  Then we need:
  id, key, name, title, image
  from each champion.
*/

const getAllChampionsCB = () => {
  kayn.DDragon.Champion.list()
    .then(
      (data) => {
        const champions = data;
        return champions;
      })
    .then(
      (champions) => {
        fs.writeFileSync('champions.json', JSON.stringify(champions.data), 'utf8')
      }
    )
}

getAllChampionsCB();

const getItemByName = (name) => {
  kayn.DDragon.Item.list()
  .then(data => {
    data.fil
  })
}