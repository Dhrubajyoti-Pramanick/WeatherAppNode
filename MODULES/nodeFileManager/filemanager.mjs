import * as fileOperation from "./fileOps.mjs";
import * as dataOperation from "./dataOps.mjs";
import * as folderOperation from "./folderOps.mjs";
let input;
let taskNo;
let fileName;
const none = undefined;
export const path = process.cwd();
export let file;
export let data;

list();
function list() {
  console.log("1.Enter 0 to exit");
  console.log("1.Enter 1 to create a file");
  console.log("2.Enter 2 to delete a file");
  console.log("3.Enter 3 to show list of files in current directory");
  console.log("4.Enter 4 to add data to a file");
  console.log("5.Enter 5 to delete data to a file");
  console.log("6.Enter 6 to read data from a file");
  console.log("7.Enter 7 to create a folder");
  console.log("8.Enter 8 to delete a folder");
  console.log("9.Enter 9 to rename a folder");
  console.log("10.Enter 10 show list of folder in current directory");
  console.log("11.Enter 11 to show the menu");
}
function fileCondition() {
  if (taskNo === "0") {
    console.log("Operation terminated!");
    process.exit();
  } else if (taskNo === "1") {
    if (fileName === none) {
      console.log("Enter the filename to add after 1 in terminal");
    }
  } else if (taskNo === "2") {
    if (fileName === none) {
      console.log("Enter the filename to delete after 2 in terminal");
    }
  } else if (taskNo === "3") {
    console.log("The list of files in the directory are:");
  } else if (taskNo === "4") {
    if (fileName === none) {
      console.log("Enter file name and data to add after 4:");
    }
  } else if (taskNo === "5") {
    if (fileName === none) {
      console.log("Enter the file name after 5 to delete it's content:");
    }
  } else if (taskNo === "6") {
    if (fileName === none) {
      console.log("Enter the file name after 6 to read it's content:");
    }
  } else if (taskNo === "7") {
    if (fileName === none) {
      console.log("Enter the folder name after 7 to add:");
    }
  } else if (taskNo === "8") {
    if (fileName === none) {
      console.log("Enter the folder name after 8 to delete:");
    }
  } else if (taskNo === "9") {
    if (fileName === none) {
      console.log("Enter the folder name and new folder name after 9:");
    }
  } else if (taskNo === "10") {
    console.log("The list of folder in the directory are:");
  } else if (taskNo === "11") {
    list();
  } else {
    console.log("Wrong Input");
  }
  dataCondition();
}
function dataCondition() {
  if (fileName !== none && taskNo === "1") {
    file = fileName;
    fileOperation.fileadd();
  } else if (fileName !== none && taskNo === "2") {
    file = fileName;
    fileOperation.filedel();
  } else if (fileName === none && taskNo === "3") {
    fileOperation.filelist();
  } else if (fileName !== none && taskNo === "4") {
    file = fileName;
    data = input[3];
    dataOperation.addData();
  } else if (fileName !== none && taskNo === "5") {
    file = fileName;
    dataOperation.delData();
  } else if (fileName !== none && taskNo === "6") {
    file = fileName;
    dataOperation.readData();
  } else if (fileName !== none && taskNo === "7") {
    file = fileName;
    folderOperation.addfolder();
  } else if (fileName !== none && taskNo === "8") {
    file = fileName;
    folderOperation.delfolder();
  } else if (fileName !== none && taskNo === "9") {
    file = fileName;
    data = input[3];
    folderOperation.rnamefolder();
  } else if (fileName === none && taskNo === "10") {
    folderOperation.folderlist();
  }
}
process.stdin.on("data", function (data) {
  input = data.toString().trim().split(" ");
  taskNo = input[0];
  fileName = input[1];
  data = input[2];
  fileCondition();
});
