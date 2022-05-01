import express from "express";

import { mapOrder } from "./utilities/Sort.js";
const app = express();

const hostName = "localhost";
const port = 8001;
app.get("/", (req, res) => {
  res.end("<h1>Hello world!</h1><hr/>");
});

app.listen(port, hostName, () => {
  console.log(`hello candy dev, im running at ${hostName}: ${port}`);
});
