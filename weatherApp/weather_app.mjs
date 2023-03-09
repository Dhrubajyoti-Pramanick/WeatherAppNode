import * as city from "./weatherDb.mjs";
import * as op from "./dbOp.mjs";
function getWeatherData(place) {
  const result = city.weatherData.find(function (e) {
    if (e.location == place) return e;
  });
  console.log(`Weather data of ${place} is`);
  console.log(result);
}
const place = process.argv[2];
getWeatherData(place);

// list of cities
function cityDatabase() {
  let cityList = city.weatherData;
  console.log("List of cities:");
  for (let i = 0; i < cityList.length; i++) {
    console.log(cityList[i].location);
  }
}
cityDatabase();
// console.log(op.dict);
console.log("Adding kathmandu with data:");
op.addData();
console.log(city.weatherData);
console.log("database after deleting delhi:");
op.deleteData();
console.log(city.weatherData);
console.log("After updating humidity of noida ");
op.updateData();
console.log(city.weatherData);
