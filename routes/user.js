const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

// Auth
router.post("/register", UserController.register);
router.post("/login", UserController.login);

// CRUD utilisateur (admin seulement)
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
