import * as city from "./weatherDb.mjs";
import * as file from "./fileOp.mjs";
// let location, lat, lng, humidity, presure, wind, temp;
export function addData() {
  let dict = {
    location: "kathmandu",
    lat: "17",
    lng: "27",
    humidity: "100",
    presure: "1098",
    wind: "12",
    temp: "20",
  };
  file.arr.push(dict);
}

export function deleteData() {
  let delPos = city.weatherData.findIndex((x) => x.location === "delhi");
  city.weatherData.splice(delPos, 1);
}
export function updateData() {
  city.weatherData.find(function (e) {
    if (e.location == "noida") {
      e.humidity = "100";
    }
  });
}


