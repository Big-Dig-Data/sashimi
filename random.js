import Chance from 'chance'

function randomCount (seedArray) {
  console.log(seedArray)
  let chance
  if (seedArray) {
    chance = new Chance(...seedArray)
  } else {
    chance = new Chance()
  }
  return chance.integer({ min: 0, max: 500})
}


export {
  randomCount
}
