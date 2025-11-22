// routes/test.js
const express = require("express");
const router = express.Router();

// GET /test
router.get("/", (req, res) => {
  res.send("Route test fonctionne !");
});

module.exports = router;
