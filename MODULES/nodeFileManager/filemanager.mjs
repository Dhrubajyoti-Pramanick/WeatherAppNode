import * as fileOperation from "./fileOps.mjs";
import * as dataOperation from "./dataOps.mjs";
import * as folderOperation from "./folderOps.mjs";
let input = process.argv;
let task_no = input[2];
let fileName = input[3];
let none = undefined;
export let path = process.cwd();
export let file;
export let data;

if (task_no === none) {
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
} else if (task_no === "1") {
  if (fileName === none) {
    console.log("Enter the filename to add after 1 in terminal");
  }
} else if (task_no === "2") {
  if (fileName === none) {
    console.log("Enter the filename to delete after 2 in terminal");
  }
} else if (task_no === "3") {
  console.log("The list of files in the directory are:");
} else if (task_no === "4") {
  if (fileName === none) {
    console.log("Enter file name and data to add after 4:");
  }
} else if (task_no === "5") {
  if (fileName === none) {
    console.log("Enter the file name after 5 to delete it's content:");
  }
} else if (task_no === "6") {
  if (fileName === none) {
    console.log("Enter the file name after 6 to read it's content:");
  }
} else if (task_no === "7") {
  if (fileName === none) {
    console.log("Enter the folder name after 7 to add:");
  }
} else if (task_no === "8") {
  if (fileName === none) {
    console.log("Enter the folder name after 8 to delete:");
  }
} else if (task_no === "9") {
  if (fileName === none) {
    console.log("Enter the folder name and new folder name after 9:");
  }
} else if (task_no === "10") {
  console.log("The list of folder in the directory are:");
} else {
  console.log("wrong Input");
}

if (fileName !== none && task_no === "1") {
  file = fileName;
  fileOperation.fileadd();
} else if (fileName !== none && task_no === "2") {
  file = fileName;
  fileOperation.filedel();
} else if (fileName === none && task_no === "3") {
  fileOperation.filelist();
} else if (fileName !== none && task_no === "4") {
  file = fileName;
  data = input[4];
  dataOperation.addData();
} else if (fileName !== none && task_no === "5") {
  file = fileName;
  dataOperation.delData();
} else if (fileName !== none && task_no === "6") {
  file = fileName;
  dataOperation.readData();
} else if (fileName !== none && task_no === "7") {
  file = fileName;
  folderOperation.addfolder();
} else if (fileName !== none && task_no === "8") {
  file = fileName;
  folderOperation.delfolder();
} else if (fileName !== none && task_no === "9") {
  file = fileName;
  data = input[4];
  folderOperation.rnamefolder();
} else if (fileName === none && task_no === "10") {
  folderOperation.folderlist();
 } 

