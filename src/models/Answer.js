const fs = require("fs");
const path = require("path");

let data = [];

module.exports = {
  addResult: (answer) => {
    data.push(answer);
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
  getAllResults: () => {
    if (fs.existsSync(path.join(__dirname, "../data/answer.txt"))) {
      try {
        const data = fs.readFileSync(
          path.join(__dirname, "../data/answer.txt"),
          "utf8"
        );
        return data;
      } catch (err) {
        console.error(err);
      }
    } else {
      return [];
    }
  },
};
