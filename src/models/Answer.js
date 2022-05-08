const { getAllResults } = require("../helpers/operations");
const path = require("path");
const fs = require("fs");

module.exports = {
  addResult: (answer) => {
    let data = JSON.parse(getAllResults());
    if (!data) {
      data = [];
    }
    data.push(answer);
    fs.writeFile(
      path.join(__dirname, "../../public/data/answer.txt"),
      JSON.stringify(data),
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("The file was saved!");
        }
      }
    );
  },
};
