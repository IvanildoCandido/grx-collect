const router = require("express").Router();
const { collectForm } = require("./controllers/CollectController");
const { resultsCollect } = require("./controllers/ResultsController");

router.get("/", collectForm);
router.get("/results", resultsCollect);

module.exports = router;
