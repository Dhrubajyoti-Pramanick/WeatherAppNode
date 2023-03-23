import * as fs from "fs";
import * as city from "./weatherData.mjs";

const filePath = new URL("arrayData.txt", import.meta.url);
export let database;

//Read file
export function fileRead() {
  console.log("Opening file!");
  let file = fs.readFileSync(filePath, "utf8");
  database = JSON.parse(file);
  console.log("Reading data");
}

// create file
export function fileCreate() {
  console.log("Creating a file");
  fs.writeFileSync(filePath, JSON.stringify(database));
}

// write file
export function fileWrite() {
  console.log("Writing into existing file");
  fs.writeFile(filePath, JSON.stringify(database), function (err, data) {
    if (err) {
      return console.error(err);
    }
  });
}

// Append data to file
export function fileAppend() {
  fs.appendFile(filePath,JSON.stringify(content),"utf8",
    // Callback function
    function (err) {
      if (err) throw err;
      //  If no error
      console.log("Data is appended to file successfully.");
    }
  );
}