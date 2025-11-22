const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController");
const { body } = require("express-validator");
const validate = require("../middleware/validationMiddleware");

router.post(
    "/",
    [
        body("title").notEmpty().withMessage("Titre obligatoire"),
        body("description").optional(),
    ],
    validate,
    TaskController.create
);

module.exports = router;
