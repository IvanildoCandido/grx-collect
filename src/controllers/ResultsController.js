const { getAllResults } = require("../models/Answer");
const { countQuantities } = require("../helpers/operations");
module.exports = {
  resultsCollect: async (req, res) => {
    let data = await getAllResults();
    let results = countQuantities(JSON.parse(data));
    res.render("pages/results", { results });
  },
};
