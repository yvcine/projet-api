// routes/userTask.js
const express = require("express");
const router = express.Router();
const UserTaskController = require("../controllers/UserTaskController");
const { body } = require("express-validator");
const validate = require("../middleware/validationMiddleware");
const auth = require("../middleware/auth");

router.post(
  "/",
  auth,
  [body("userId").isInt(), body("taskId").isInt()],
  validate,
  UserTaskController.assign
);

router.get("/", auth, UserTaskController.getAll);
router.put("/:id", auth, UserTaskController.update);
router.delete("/:id", auth, UserTaskController.remove);

module.exports = router;
