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
    ];
    return results.sort((a, b) => (a.value > b.value ? -1 : true));
  },
};
