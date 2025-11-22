const express = require("express");
const router = express.Router();
const XPLogController = require("../controllers/XPLogController");
const { body } = require("express-validator");
const validate = require("../middleware/validationMiddleware");

router.post(
    "/",
    [
        body("userId").isInt(),
        body("taskId").isInt(),
        body("xpGained").isInt(),
    ],
    validate,
    XPLogController.create
);

module.exports = router;
