const answerModel = {
  question_1: 1,
  question_2: 1,
  question_3: 1,
  question_4: 1,
  positiveQuantity: 1,
  negativeQuantity: 1,
  notEvaluatedQuantity: 1,
};
let data = [answerModel];

module.exports = {
  addResult: (answer) => {
    data.push(answer);
  },
  getAllResults: () => {},
};
