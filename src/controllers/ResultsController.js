const { getAllResults } = require("../models/Answer");
module.exports = {
  resultsCollect: (req, res) => {
    let results = getAllResults();
    res.render("pages/results", { results });
  },
};
