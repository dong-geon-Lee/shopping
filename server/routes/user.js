const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("user test is successfull");
});

router.post("/", (req, res) => {
  const username = req.body.username;
  console.log(username);
  res.json(username);
});

module.exports = router;
