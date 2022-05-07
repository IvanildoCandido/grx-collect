const fs = require("fs");
const path = require("path");

let data = [];

module.exports = {
  addResult: (answer) => {
    data.push(answer);
  },
  getAllResults: () => {
    return data;
  },
  createFile: (data) => {
    fs.writeFile(
      path.join(__dirname, "../data/answer.txt"),
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
