const express = require("express");
const router = express.Router();
const TaskResetController = require("../controllers/TaskResetController");
const { body } = require("express-validator");
const validate = require("../middleware/validationMiddleware");

router.post(
    "/",
    [
        body("taskId").isInt().withMessage("taskId doit être un entier"),
        body("resetDate")
            .isISO8601()
            .withMessage("resetDate doit être une date valide"),
    ],
    validate,
    TaskResetController.create
);

module.exports = router;
