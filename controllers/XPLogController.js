// controllers/XPLogController.js
const { XPLog } = require("../models");

exports.create = async (req, res) => {
  try {
    const xp = await XPLog.create(req.body);
    res.status(201).json(xp);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const logs = await XPLog.findAll({ where: req.query.userId ? { userId: req.query.userId } : {} });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};
