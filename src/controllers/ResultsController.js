const { getAllResults } = require("../helpers/operations");
const { countQuantities } = require("../helpers/operations");
const path = require("path");
const fs = require("fs");

module.exports = {
  resultsCollect: async (req, res) => {
    let data = [];
    data = await getAllResults();
    if (!data) {
      res.render("pages/results", {
        empty: "Não há resultados a serem exibidos!",
      });
      return;
    }
    let results = countQuantities(JSON.parse(data));
    res.render("pages/results", {
      total: results[4],
      values: [
        {
          title: results[1],
          value: results[5],
          percent: ((results[5] * 100) / results[4]).toFixed(2),
        },
        {
          title: results[2],
          value: results[6],
          percent: ((results[6] * 100) / results[4]).toFixed(2),
        },
        {
          title: results[3],
          value: results[7],
          percent: ((results[7] * 100) / results[4]).toFixed(2),
        },
      ],
    });
  },
  clearAnswers: (req, res) => {
    if (fs.existsSync(path.join(__dirname, "../data/answer.txt"))) {
      fs.unlinkSync(path.join(__dirname, "../data/answer.txt"));
    }
    res.render("pages/formCollect");
  },
};
