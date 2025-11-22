// routes/taskReset.js
const express = require("express");
const router = express.Router();
const TaskResetController = require("../controllers/TaskResetController");
const { body } = require("express-validator");
const validate = require("../middleware/validationMiddleware");
const auth = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");

router.post(
  "/",
  auth,
  roleMiddleware(["admin"]),
  [body("taskId").isInt().withMessage("taskId requis"), body("period").notEmpty().withMessage("period requis")],
  validate,
  TaskResetController.create
);

router.get("/", auth, TaskResetController.getAll);
router.delete("/:id", auth, roleMiddleware(["admin"]), TaskResetController.remove);

module.exports = router;
