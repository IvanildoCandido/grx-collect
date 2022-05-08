const { getAllResults } = require("../models/Answer");
const { countQuantities } = require("../helpers/operations");
module.exports = {
  resultsCollect: async (req, res) => {
    let data = await getAllResults();
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
};
