const { convertTitles } = require("../helpers/formatValues");
const path = require("path");
const fs = require("fs");

module.exports = {
  countQuantities: (data) => {
    let totalPositive = data.reduce((acc, item) => {
      acc = item.positiveQuantity + acc;
      return acc;
    }, 0);
    let totalNegative = data.reduce((acc, item) => {
      acc = item.negativeQuantity + acc;
      return acc;
    }, 0);
    let totalNotEvaluated = data.reduce((acc, item) => {
      acc = item.notEvaluatedQuantity + acc;
      return acc;
    }, 0);
    let total = totalPositive + totalNegative + totalNotEvaluated;
    let results = [
      { name: "total", value: total },
      { name: "totalPositive", value: totalPositive },
      { name: "totalNegative", value: totalNegative },
      { name: "totalNotEvaluated", value: totalNotEvaluated },
    ].sort((a, b) => (a.value > b.value ? -1 : true));
    results = results.reduce((acc, item, index) => {
      acc[Object.values(item)[0]] = Object.values(item)[1];
      return acc;
    }, {});
    let titles = convertTitles(Object.keys(results));
    return [...titles, ...Object.values(results)];
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
      return false;
    }
  },
};
