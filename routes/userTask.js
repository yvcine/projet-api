const express = require("express");
const router = express.Router();
const UserTaskController = require("../controllers/UserTaskController");
const { body } = require("express-validator");
const validate = require("../middleware/validationMiddleware");

router.post(
    "/",
    [
        body("userId").isInt(),
        body("taskId").isInt(),
    ],
    validate,
    UserTaskController.assign
);

module.exports = router;
