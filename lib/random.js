import Chance from "chance";
import { databases, titles } from "./titles";

function randomUsageCount(seedArray, context) {
  const scale = randomUsageScale(context);
  let chance = new Chance(...seedArray);
  console.debug(
    "Scale:",
    scale,
    "Random seed for seedArray",
    seedArray,
    "is",
    chance.seed
  );
  return chance.integer({ min: Math.round(scale / 4), max: scale });
}

function randomTitleSetByPlatform(titles, context) {
  // one platform should have the same set of titles
  let chance = new Chance(context.platform);
  const sampleSize = chance.integer({ min: 2, max: 100 });
  console.debug(
    `Selecting ${sampleSize} random titles for platform ${context.platform}`
  );
  return chance.pickset(titles, sampleSize);
}

function randomTitleSubsetByOrganization(titles, context) {
  // one organization should have the same set of titles
  // it will usually be picked from the list of titles for a specific platform
  let chance = new Chance(context.customerId);
  const sampleSize = chance.integer({
    min: Math.round(0.5 * titles.length),
    max: titles.length,
  });
  console.debug(
    `Selecting title subset of size ${sampleSize} for org ${context.customerId}`
  );
  return chance.pickset(titles, sampleSize);
}

function randomTitleSubset(titles, seedArray = []) {
  // get a random subset of titles for this platform
  // we want to have most journals there
  let chance = new Chance(...seedArray);
  let sampleSize = chance.integer({
    min: Math.round(0.9 * titles.length),
    max: titles.length,
  });
  return chance.pickset(titles, sampleSize);
}

function randomTitles(context, month) {
  // selects random titles for this platform and organization
  // and then selects a subset for this specific month
  return randomTitleSubset(
    randomTitleSubsetByOrganization(
      randomTitleSetByPlatform(titles, context),
      context
    ),
    [month]
  );
}

function randomDatabases(context, month) {
  // selects random titles for this platform and organization
  // and then selects a subset for this specific month
  return randomTitleSubset(
    randomTitleSubsetByOrganization(
      randomTitleSetByPlatform(databases, context),
      context
    ),
    [month]
  );
}

function randomUsageScale(context) {
  // based on the customerId and the platform, generate a random number
  // representing how much usage there is for this platform and organization
  // we want to see numbers in tens with a similar probability as those in thousands
  // so we do the random generation in two steps - first we generate the power
  // and then a random int in the range with 2^power as max
  let chance = new Chance(context.platform, context.customerId);
  let power = chance.integer({ min: 4, max: 13 });
  return chance.integer({ min: 10, max: Math.pow(2, power) });
}

export { randomUsageCount, randomTitles, randomDatabases };
