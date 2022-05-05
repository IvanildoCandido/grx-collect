const express = require("express");
require("dotenv").config();
const mustache = require("mustache-express");
const path = require("path");

const PORT = process.env.PORT;
const server = express();
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

server.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
