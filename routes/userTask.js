const express = require("express");
const router = express.Router();
const UserTaskController = require("../controllers/UserTaskController");

// Gestion tâches utilisateur
router.get("/:userId", UserTaskController.getTasksForUser);
router.post("/complete", UserTaskController.completeTask); // user coche la tâche
router.post("/reset", UserTaskController.resetTasks); // reset toutes les 24h (admin ou CRON)

module.exports = router;
