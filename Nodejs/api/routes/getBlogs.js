const express = require("express");
const router = express.Router();
const connection = require("../databse/sql");
const { route } = require(".");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM Blog", (err, result) => {
    if (err) throw err;
    else {
      res.send(result);
    }
  });
});

module.exports = router;
