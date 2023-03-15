import * as fs from "fs";
import * as manager from "./filemanager.mjs";
export function fileadd() {
  fs.open(manager.file, "w", function (err, f) {
    console.log("File created!");
  });
}

export function filedel() {
  let path = `./${manager.file}`;
  if (fs.existsSync(path)) {
    fs.unlink(manager.file, function (err, f) {
      console.log("File deleted!");
    });
  } else {
    console.log("file does not exist");
  }
}

export function filelist() {
  fs.readdir(manager.path, (err, files) => {
    files.forEach((file) => {
      if(fs.statSync(file).isFile()){
        console.log(file);
      }
    });
  });
}
