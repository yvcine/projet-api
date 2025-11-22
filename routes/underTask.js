const express = require("express");
const router = express.Router();
const UnderTaskController = require("../controllers/UnderTaskController");
const { body } = require("express-validator");
const validate = require("../middleware/validationMiddleware");

router.post(
    "/",
    [
        body("taskId").isInt().withMessage("taskId doit être un entier"),
        body("title").notEmpty().withMessage("Titre obligatoire"),
        body("points").optional().isInt(),
        body("ord").optional().isInt(),
    ],
    validate,
    UnderTaskController.create
);

module.exports = router;
