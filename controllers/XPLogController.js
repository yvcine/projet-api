const XPLog = require("../models/XPLog");

const XPLogController = {
  getXPLogsForUser: async (req, res) => {
    const logs = await XPLog.findAll({ where: { user_id: req.params.userId } });
    res.json(logs);
  },
  addXPLog: async (req, res) => {
    const log = await XPLog.create(req.body);
    res.status(201).json({ message: "XP ajouté", log });
  }
};

module.exports = XPLogController;
