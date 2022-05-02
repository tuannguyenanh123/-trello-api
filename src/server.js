import express from "express";

import { connectDB,getDB } from "./config/mongodb.js";
import { env } from "./config/environtment.js";
import { BoardModel } from "./models/board.model.js";


const hostName = env.APP_HOST_NAME;
const port = env.APP_PORT;

connectDB()
    .then(() => {
      console.log("connected success to database server");
    })
    .then(() => bootServer())
    .catch(error => {
      console.log(error);
      process.exit(1)
    })


const bootServer = () => {
  const app = express();
  app.get("/test", async (req, res) => {
   
    res.end("<h1>Hello world!</h1><hr/>");
  });
  app.listen(port, hostName, () => {
    console.log(`hello candy dev, im running at ${hostName}: ${port}`);
  });
  
  
}
