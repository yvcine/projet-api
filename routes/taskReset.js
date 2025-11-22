const express = require("express");
const router = express.Router();
const TaskResetController = require("../controllers/TaskResetController");

// CRUD resets (admin)
router.get("/", TaskResetController.getAllResets);
router.post("/", TaskResetController.createReset);
router.delete("/:id", TaskResetController.deleteReset);

module.exports = router;