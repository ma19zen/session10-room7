function analyzeAsteroidData() {
  let asteroidDiameters = [];
  asteroidDiameters.forEach(() => {});
}

/*
function analyzeAsteroidData(asteroidData) {
  const asteroidDiameters = [];

  for (const date in asteroidData) {
      for (const asteroid of asteroidData[date]) {
          const diameter = asteroid.estimated_diameter.kilometers.estimated_diameter_max;
          asteroidDiameters.push(diameter);
      }
  }

  const totalAsteroids = asteroidDiameters.length;
  const sumDiameters = asteroidDiameters.reduce((sum, diameter) => sum + diameter, 0);
  const averageDiameter = sumDiameters / totalAsteroids;

  console.log("Total asteroids found:", totalAsteroids);
  console.log("Average diameter (km):", averageDiameter);
}

module.exports = { analyzeAsteroidData };
*/
