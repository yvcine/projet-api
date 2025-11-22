const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const { body } = require("express-validator");
const validate = require("../middleware/validationMiddleware");

router.post(
    "/register",
    [
        body("name").notEmpty(),
        body("email").isEmail(),
        body("password").isLength({ min: 6 }),
        body("roleId").isInt(),
    ],
    validate,
    UserController.register
);

router.post(
    "/login",
    [
        body("email").isEmail(),
        body("password").notEmpty(),
    ],
    validate,
    UserController.login
);

module.exports = router;
