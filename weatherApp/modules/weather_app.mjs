import * as city from "./weatherDb.mjs";
import * as operation from "./dbOp.mjs";
import * as file from "./fileOp.mjs";

// Getting weather data for a location
function getWeatherData(place) {
  const result = city.weatherData.find(function (e) {
    if (e.location == place) return e;
  });
  console.log(`Weather data of ${place} is`);
  console.log(result);
}
const place = process.argv[2];
// getWeatherData(place);


// list of cities
function cityDatabase() {
  let cityList = city.weatherData;
  console.log("List of cities:");
  for (let i = 0; i < cityList.length; i++) {
    console.log(cityList[i].location);
  }
}
// cityDatabase();
file.fileWrite();


// ADD Data
// console.log("Adding kathmandu with data:");
// operation.addData();

// // DELETE data
// console.log("database after deleting delhi:");
// operation.deleteData();

// // UPDATE data
// console.log("After updating humidity of noida ");
// operation.updateData();



//sample input example
// function add(a, b) {
//   console.log("add ->", Number(a) + Number(b));
// }
// const input = process.argv;
// console.log(input[2]);
// if (input[2] === "1") {
//   add(input[3], input[4]);
// }

// file.fileWrite();
// file.fileRead();