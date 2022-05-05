const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Test Routes");
});

module.exports = router;
