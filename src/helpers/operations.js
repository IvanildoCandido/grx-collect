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
    return [...Object.keys(results), ...Object.values(results)];
  },
};
