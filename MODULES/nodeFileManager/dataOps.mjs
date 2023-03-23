import * as fs from "fs";
import * as manager from "./fileManager.mjs";
let path;
export function addData() {
  path = `./${manager.file}`;
  if (fs.existsSync(path)) {
    fs.appendFile(manager.file, manager.data, function (err, f) {
      console.log("Data to file added!");
    });
  } else {
    console.log("File does not exist");
  }
}

export function delData() {
  path = `./${manager.file}`;
  if (fs.existsSync(path)) {
    fs.truncate(manager.file, manager.data, function (err, f) {
      console.log("Data from file deleted!");
    });
  } else {
    console.log("File does not exist");
  }
}

export function readData() {
  path = `./${manager.file}`;
  if (fs.existsSync(path)) {
    fs.readFile(manager.file, 'utf8', function (err, data) {
      console.log(data);
    });
  } else {
    console.log("File does not exist");
  }
}
