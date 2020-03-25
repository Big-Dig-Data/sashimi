import Chance from 'chance'

function randomCount () {
  let chance = new Chance()
  return chance.integer({ min: 0, max: 500})
}


export {
  randomCount
}
