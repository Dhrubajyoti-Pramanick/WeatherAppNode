import * as http from "http";
import * as city from '../weatherApp/modules/weatherDb.mjs';
import * as url from 'url';
const port = 8080;
let url;
const data = {
  place: {
    location: city.weatherData[3].location,
  },
  name: "visal",
  age: "OK",
};

function getRoutesBasedData(route, data) {
  let status = 200;
  console.log("route", route);
  return JSON.stringify({
    apiData: data,
    status,
    route,
    message: "hey i am running ...",
  });
}

function getRequestData(url) {
  if (req.url === "/hi") {
    return getRoutesBasedData(req.url, "hi");
  } else if (url === "/weather") {
    return getRoutesBasedData(req.url, data);
  } else {
    return getRoutesBasedData("NOT FOUND", data);
  }
}

const ourServer = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200, { "Content-Type": "text/html" });
  url = req.url;
  res.end(getRequestData(url));
});

ourServer.listen(port, () => {
  console.log("port ...running.. ", port);
});

