// routes/role.js
const express = require("express");
const router = express.Router();
const RoleController = require("../controllers/RoleController");
const { body } = require("express-validator");
const validate = require("../middleware/validationMiddleware");
const auth = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");

router.post(
  "/",
  auth,
  roleMiddleware(["admin"]),
  [body("name").notEmpty().withMessage("name obligatoire")],
  validate,
  RoleController.create
);

router.get("/", auth, RoleController.getAll);
router.get("/:id", auth, RoleController.getById);
router.put("/:id", auth, roleMiddleware(["admin"]), RoleController.update);
router.delete("/:id", auth, roleMiddleware(["admin"]), RoleController.remove);

module.exports = router;
