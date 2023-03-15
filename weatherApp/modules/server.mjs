import * as http from "http";
import * as city from "./weatherDb.mjs";
let url;
http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // allows client to access data from server
    res.writeHead(299, { "Content-type": "text/html" });
    url = req.url;
    if (url === "/myserver") {//specific flag to get a response from the port number
      res.write(JSON.stringify(city.weatherData));
      res.end();
    } else {
      res.write("Hello World, YOOOOO!!!!!!!");
      res.end();
    }
  })
  .listen(8000, function () {
    console.log(`server start at port http://127.0.0.1:8000`);
    // console.log(url);
  });

// http.createServer(callback fun()).listen(port number, callback fun())
