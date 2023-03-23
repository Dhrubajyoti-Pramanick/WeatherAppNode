import * as city from "./weatherData.mjs";
import * as file from "./fileOp.mjs";
let pos;

export function addData() {
  file.fileRead();//read from file
  const dict = {
    location: "kathmandu",
    lat: "17",
    lng: "27",
    humidity: "100",
    presure: "1098",
    wind: "12",
    temp: "20",
    farhenheit: "80.2",
    condition: "Sunny"
  };
  const dict2 ={
    location: "noida",
    lat: "22",
    lng: "12",
    humidity: "93",
    presure: "1005",
    wind: "5",
    temp: "21",
    farhenheit: "84.2",
    condition: "Mist"
  };
  pos = file.database.findIndex((x) => x.location === "kathmandu");
  if(pos === -1){
    file.database.push(dict);
    file.fileCreate();//add to file after operation
  } else {
    console.log("Kathmandu already exists");
  }
}

export function deleteData() {
  file.fileRead();
  pos = file.database.findIndex((x) => x.location === "kathmandu");
  if(pos === -1){
    console.log("Kathmandu not found!")
  }else{
    file.database.splice(pos, 1);
    file.fileWrite();
  }
  
}
export function updateData() {
  file.fileRead();
  file.database.find(function (e) {
    if (e.location === "noida") {
      e.humidity = "100";
    }
  });
  file.fileWrite();
}
