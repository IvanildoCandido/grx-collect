const router = require("express").Router();
const { collectForm, userAnswer } = require("./controllers/CollectController");
const { resultsCollect } = require("./controllers/ResultsController");

router.get("/results", resultsCollect);
router.post("/results", userAnswer);
router.get("/", collectForm);

module.exports = router;
