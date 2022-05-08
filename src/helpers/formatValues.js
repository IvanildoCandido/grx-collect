module.exports = {
  convertTitles: (titles) => {
    let results = [];
    titles.forEach((item) => {
      switch (item) {
        case "total":
          results.push("Total");
          break;
        case "totalPositive":
          results.push("Positiva");
          break;
        case "totalNegative":
          results.push("Negativa");
          break;
        case "totalNotEvaluated":
          results.push("Não Avaliada");
          break;
      }
    });
    return results;
  },
};
