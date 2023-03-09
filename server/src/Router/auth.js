const mysql2 = require("mysql2")
const express = require("express");
const app = express();
const router = express.Router();
const data = require("../utils/data");

router.get("/", (req, res) => {
  res.send("Server Response");
});
router.get("/links_data", (req, res) => {
  res.json({ data: data, message: "done" });
});
module.exports = router;
