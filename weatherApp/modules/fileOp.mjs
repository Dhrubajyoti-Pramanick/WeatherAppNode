import * as fs from "fs";
import * as city from "./weatherDb.mjs";
// var fs = require('fs');

let data = city.weatherData;

// Append data to file
export function fileAppend() {
  fs.appendFile(
    "arrayData.txt",
    JSON.stringify(data),
    "utf8",

    // Callback function
    function (err) {
      if (err) throw err;

      //  If no error
      console.log("Data is appended to file successfully.");
    }
  );
}
export let arr=[];
export function fileRead() {
  console.log("opening file!");
  fs.readFile('arrayData.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Data: " + data);
    arr = JSON.parse(data);
    console.log("From text to array:");
    console.log(arr);
 });
}

export function fileWrite() {
    console.log("writing into existing file");
    fs.writeFile('arrayData.txt', arr, function(err) {
    if (err) {
      return console.error(err);
    }
   console.log("Data written successfully!");
    });
}
// fileAppend(); 
// fileRead();