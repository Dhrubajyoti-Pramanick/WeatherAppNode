import * as city from "./weatherDb.mjs";
import * as file from "./fileOp.mjs";
// let location, lat, lng, humidity, presure, wind, temp;
export function addData() {
  file.fileRead();//read from file
  let dict = {
    location: "kathmandu",
    lat: "17",
    lng: "27",
    humidity: "100",
    presure: "1098",
    wind: "12",
    temp: "20",
  };
  file.content.push(dict);
  file.fileCreate();//add to file after operation
}

export function deleteData() {
  file.fileRead();
  let delPos = file.content.findIndex((x) => x.location === "delhi");
  file.content.splice(delPos, 1);
  file.fileWrite();
}
export function updateData() {
  file.fileRead();
  file.content.find(function (e) {
    if (e.location === "noida") {
      e.humidity = "100";
    }
  });
  file.fileWrite();
}
