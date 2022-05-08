const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const mustache = require("mustache-express");
const path = require("path");
const routes = require("./routes");

const PORT = process.env.PORT || 5000;
const server = express();
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.json({ extended: true }));
server.use(routes);

server.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
