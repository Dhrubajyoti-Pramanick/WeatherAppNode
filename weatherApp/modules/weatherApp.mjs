import * as city from "./weatherData.mjs";
import * as operation from "./dataOp.mjs";
import * as file from "./fileOp.mjs";
let place;
//CommonJS : const fs = require('fs');
//ES6: import * as fs from 'fs';
// CommonJS: module.exports = {....}
// ES6: export function/variable
// export {...} 

// Getting weather data for a location
function getWeatherData(place) {
  const result = file.database.find(function (e) {
    if (e.location === place) return e;
  });
  if(result === undefined){
    console.log("Wrong Input");
  }else {
    console.log(`Weather data of ${place} is`);
    console.log(result);
  }
}

// list of cities
function cityDatabase() {
  file.fileRead();
  let cityList = file.database;
  console.log("List of cities:");
  for (let i = 0; i < cityList.length; i++) {
    console.log(cityList[i].location);
  }
  console.log(file.database);
}

function menu() {
  console.log(`Enter "list" to show list of cities.`);
  console.log("Enter city name to show its weather conditions.");
  console.log(`Enter "add" to add data of kathmandu`);
  console.log(`Enter "delete" to delete data of kathmandu`);
  console.log(`Enter "update" to update humidity of noida `);
  console.log(`Enter "read" to read file data `);
  console.log(`Enter "menu" to show the menu`);
  console.log(`Enter "0" to exit`);
}
menu();
function condition(place) {
  if(place[0] === "list") {
    cityDatabase();
  } else if(place[0] === "add") {
    operation.addData();
  } else if(place[0] === "delete") {
    operation.deleteData;
  } else if(place[0] === "update") {
    operation.updateData
  } else if(place[0] === "read") {
    file.fileRead();
  } else if(place[0] === "menu") {
    menu();
  } else if(place[0] === "0") {
    process.exit();
  } else if(place[0] !== undefined) {
    getWeatherData(place[0]);
  }
}
process.stdin.on("data",function (data){
  place = data.toString().trim().split(" ");
  condition(place);
})
