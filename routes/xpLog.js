// routes/xpLog.js
const express = require("express");
const router = express.Router();
const XPLogController = require("../controllers/XPLogController");
const { body } = require("express-validator");
const validate = require("../middleware/validationMiddleware");
const auth = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");

router.post(
  "/",
  auth,
  roleMiddleware(["admin"]),
  [body("userId").isInt(), body("amount").isInt()],
  validate,
  XPLogController.create
);

router.get("/", auth, XPLogController.getAll);

module.exports = router;
