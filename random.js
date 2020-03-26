import Chance from 'chance'

function randomCount (seedArray, index=1) {
  let chance
  if (seedArray) {
    chance = new Chance(...seedArray)
  } else {
    chance = new Chance()
  }
  let max = Math.round(1000 / 1.2**(index-1)) + 2
  return chance.integer({ min: 0, max: max})
}


export {
  randomCount
}
