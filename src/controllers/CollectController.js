const { addResult, getAllResults, createFile } = require("../models/Answer");
module.exports = {
  collectForm: (req, res) => {
    res.render("pages/formCollect");
  },
  userAnswer: async (req, res) => {
    const { question_1, question_2, question_3, question_4 } = req.body;
    let positiveQuantity = 0;
    let negativeQuantity = 0;
    let notEvaluatedQuantity = 0;
    question_1 === "yes" ? positiveQuantity++ : negativeQuantity++;
    question_2 === "yes" ? positiveQuantity++ : negativeQuantity++;
    switch (question_3) {
      case "yes": {
        positiveQuantity++;
        break;
      }
      case "no": {
        negativeQuantity++;
        break;
      }
      case "notKnow": {
        notEvaluatedQuantity++;
        break;
      }
      case "now": {
        positiveQuantity += 2;
        break;
      }
    }

    const DTO = {
      question_1,
      question_2,
      question_3,
      question_4,
      positiveQuantity,
      negativeQuantity,
      notEvaluatedQuantity,
    };
    addResult(DTO);
    console.log(getAllResults());
    createFile(getAllResults());
    res.status(201).json(DTO);
  },
};
