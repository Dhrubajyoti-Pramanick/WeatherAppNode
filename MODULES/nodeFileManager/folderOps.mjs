import * as fs from "fs";
import * as manager from "./fileManager.mjs";
let path;
let count = 0;
export function addfolder() {
  path = `./${manager.file}`;
  if (fs.existsSync(path)) {
    console.log("Folder already exist");
  } else {
    fs.mkdir(manager.file, function (err, f) {
      console.log("Folder created!");
    });
  }
}

export function delfolder() {
  path = `./${manager.file}`;
  if (fs.existsSync(path)) {
    fs.rmdir(manager.file, function (err, f) {
      console.log("Folder deleted!");
    });
  } else {
    console.log("Folder does not exist");
  }
}

export function rnamefolder() {
  path = `./${manager.file}`;
  if (fs.existsSync(path)) {
    fs.rename(manager.file, manager.data, function (err) {
      console.log("Folder renamed!");
    });
  } else {
    console.log("Folder does not exist");
  }
}

export function folderlist() {
  fs.readdir(manager.path, (err, files) => {
    files.forEach((file) => {
      if (fs.statSync(file).isDirectory()) {
        console.log(file);
        count++;
      }
    });
    if (count === 0) {
      console.log("No folder exists!");
    }
  });
}
