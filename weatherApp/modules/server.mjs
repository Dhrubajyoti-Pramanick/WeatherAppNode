import * as http from "http";
import * as url from "url";
import * as city from "./weatherDb.mjs";
import * as fs from "fs";
let q;
let port = 8000;
let data = city.weatherData;
// console.log(data);
const filePath = new URL("arrayData.txt", import.meta.url).pathname;
// console.log(filePath);
let file = fs.readFileSync(filePath, "utf8");
let database = JSON.parse(file);
// console.log(database);
http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // allows client to access data from server
    res.writeHead(200, { "Content-type": "text/html" });
    let flag = 0;
    q = url.parse(req.url, true);
    console.log("hello", q.query.myserver);
    console.log("URL:", req.url);
    for (let i = 0; i < database.length; i++) {
      if (database[i].location === q.query.myserver) {
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
    console.log(`server start at port http://127.0.0.1:8000`);
    // console.log(url);
  });

// http.createServer(callback fun()).listen(port number, callback fun())
