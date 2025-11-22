const express = require("express");
const router = express.Router();
const RoleController = require("../controllers/RoleController");

// CRUD rôles
router.get("/", RoleController.getAllRoles);
router.post("/", RoleController.createRole);
router.get("/:id", RoleController.getRoleById);
router.put("/:id", RoleController.updateRole);
router.delete("/:id", RoleController.deleteRole);

module.exports = router;
