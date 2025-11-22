const express = require("express");
const router = express.Router();
const XPLogController = require("../controllers/XPLogController");

// Historique XP
router.get("/:userId", XPLogController.getXPLogsForUser);
router.post("/", XPLogController.addXPLog); // admin ou automatique

module.exports = router;
