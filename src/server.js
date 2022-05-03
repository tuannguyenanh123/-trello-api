import express from "express";

import { connectDB,getDB } from "./config/mongodb.js";
import { env } from "./config/environtment.js";
import { apiV1 } from "./routes/v1/index.js";


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
  //enable req.body data
  app.use(express.json())

  // use APIs v1
  app.use('/v1',apiV1)

  app.listen(port, hostName, () => {
    console.log(`hello candy dev, im running at ${hostName}: ${port}`);
  });
  
}
