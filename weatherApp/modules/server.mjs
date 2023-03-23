import * as http from "http";
import * as url from "url";
import * as city from "./weatherData.mjs";
import * as fs from "fs";
let route;
const port = 8000;
const data = city.weatherData;
const filePath = new URL("arrayData.txt", import.meta.url).pathname;
let file = fs.readFileSync(filePath, "utf8");
let database = JSON.parse(file);

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // allows client to access data from server
    res.writeHead(200, { "Content-type": "text/html" });
    let flag = 0;
    route = url.parse(req.url, true);
    // use route.query.myserver to check the value of myserver in the URL
    console.log("hello", route.query.myserver);
    console.log("URL:", req.url);
    for (let i = 0; i < database.length; i++) {
      if (database[i].location === route.query.myserver) {
        flag = 1;
        res.write(JSON.stringify(database[i]));
        res.end();
      }
    }
    if (flag === 0) {
      res.write("Server is running");
      res.end();
    }
  })
  .listen(port, function () {
    console.log(`Server started at port http://127.0.0.1:${port}`);
  });
