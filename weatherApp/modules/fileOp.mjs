import * as fs from "fs";
import * as city from "./weatherDb.mjs";

const filePath = new URL("arrayData.txt", import.meta.url);
export let content = city.weatherData;

//Read file
export function fileRead() {
  console.log("opening file!");
  console.log(content);
  fs.readFile(filePath, function (data) {
    console.log("Data: " + data);
    content = JSON.parse(data);
    console.log("reading data");
    console.log("From text to array:");
    console.log(content);
  });
}
// create file
export function fileCreate() {
  console.log("Creating a file");
  fs.writeFileSync(filePath, JSON.stringify(content));
}

// write file
export function fileWrite() {
  console.log("writing into existing file");
  fs.writeFile(filePath, JSON.stringify(content), function (err, data) {
    if (err) {
      return console.error(err);
    }
  });
}
// Append data to file
export function fileAppend() {
  fs.appendFile(
    filePath,
    JSON.stringify(content),
    "utf8",

    // Callback function
    function (err) {
      if (err) throw err;

      //  If no error
      console.log("Data is appended to file successfully.");
    }
  );
}
