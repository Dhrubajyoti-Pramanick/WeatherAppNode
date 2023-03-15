import * as fileoperation from "./fileOps.mjs";
import * as dataoperation from "./dataOps.mjs";
import * as folderoperation from "./folderOps.mjs";
let input = process.argv;
export let path = process.cwd();
export let file;
export let data;

if (input[2] == null) {
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
} else if (input[2] == "1") {
  if (input[3] == null) {
    console.log("Enter the filename to add after 1 in terminal");
  }
} else if (input[2] == "2") {
  if (input[3] == null) {
    console.log("Enter the filename to delete after 2 in terminal");
  }
} else if (input[2] == "3") {
  console.log("The list of files in the directory are:");
} else if (input[2] == "4") {
  if (input[3] == null) {
    console.log("Enter file name and data to add after 4:");
  }
} else if (input[2] == "5") {
  if (input[3] == null) {
    console.log("Enter the file name after 5 to delete it's content:");
  }
} else if (input[2] == "6") {
  if (input[3] == null) {
    console.log("Enter the file name after 6 to read it's content:");
  }
} else if (input[2] == "7") {
  if (input[3] == null) {
    console.log("Enter the folder name after 7 to add:");
  }
} else if (input[2] == "8") {
  if (input[3] == null) {
    console.log("Enter the folder name after 8 to delete:");
  }
} else if (input[2] == "9") {
  if (input[3] == null) {
    console.log("Enter the folder name and new folder name after 9:");
  }
} else if (input[2] == "10") {
  console.log("The list of folder in the directory are:");
} else {
  console.log("wrong Input");
}

if (input[3] != null && input[2] == "1") {
  file = input[3];
  fileoperation.fileadd();
} else if (input[3] != null && input[2] == "2") {
  file = input[3];
  fileoperation.filedel();
} else if (input[3] == null && input[2] == "3") {
  fileoperation.filelist();
} else if (input[3] != null && input[2] == "4") {
  file = input[3];
  data = input[4];
  dataoperation.addData();
} else if (input[3] != null && input[2] == "5") {
  file = input[3];
  dataoperation.delData();
} else if (input[3] != null && input[2] == "6") {
  file = input[3];
  dataoperation.readData();
} else if (input[3] != null && input[2] == "7") {
  file = input[3];
  folderoperation.addfolder();
} else if (input[3] != null && input[2] == "8") {
  file = input[3];
  folderoperation.delfolder();
} else if (input[3] != null && input[2] == "9") {
  file = input[3];
  data = input[4];
  folderoperation.rnamefolder();
} else if (input[3] == null && input[2] == "10") {
  folderoperation.folderlist();
}
