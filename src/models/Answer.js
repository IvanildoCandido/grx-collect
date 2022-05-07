let data = [];

module.exports = {
  addResult: (answer) => {
    data.push(answer);
  },
  getAllResults: () => {
    return data;
  },
};
