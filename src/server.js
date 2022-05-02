import express from "express";

import { connectDB } from "*/config/mongodb.js";
import { mapOrder } from "*/utilities/Sort.js";
import { env } from "./config/environtment.js";

const app = express();

const hostName = env.HOST_NAME;
const port = env.PORT;

connectDB().catch(console.log);

app.get("/", (req, res) => {
  res.end("<h1>Hello world!</h1><hr/>");
});

app.listen(port, hostName, () => {
  console.log(`hello candy dev, im running at ${hostName}: ${port}`);
});
