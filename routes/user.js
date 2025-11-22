// routes/user.js
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const { body } = require("express-validator");
const validate = require("../middleware/validationMiddleware");
const auth = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");

// register
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("name obligatoire"),
    body("email").isEmail().withMessage("email invalide"),
    body("password").isLength({ min: 6 }).withMessage("password min 6"),
  ],
  validate,
  UserController.register
);

// login
router.post(
  "/login",
  [body("email").isEmail(), body("password").notEmpty()],
  validate,
  UserController.login
);

// CRUD (protected for listing/updating/deleting)
router.get("/", auth, roleMiddleware(["admin"]), UserController.getAll);
router.get("/:id", auth, UserController.getById);
router.put("/:id", auth, roleMiddleware(["admin"]), UserController.update);
router.delete("/:id", auth, roleMiddleware(["admin"]), UserController.remove);

module.exports = router;
