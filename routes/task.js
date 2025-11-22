// routes/task.js
const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController");
const { body } = require("express-validator");
const validate = require("../middleware/validationMiddleware");
const auth = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");

router.post(
  "/",
  auth,
  roleMiddleware(["admin"]),
  [body("title").notEmpty().withMessage("title obligatoire")],
  validate,
  TaskController.create
);

router.get("/", auth, TaskController.getAll);
router.get("/:id", auth, TaskController.getById);
router.put("/:id", auth, roleMiddleware(["admin"]), TaskController.update);
router.delete("/:id", auth, roleMiddleware(["admin"]), TaskController.remove);

module.exports = router;
