const express = require("express");
const router = express.Router();
const RoleController = require("../controllers/RoleController");
const { body } = require("express-validator");
const validate = require("../middleware/validationMiddleware");

router.post(
    "/",
    [ body("name").notEmpty().withMessage("Le nom du rôle est obligatoire") ],
    validate,
    RoleController.create
);

module.exports = router;
