const TaskReset = require("../models/TaskReset");

const TaskResetController = {
  getAllResets: async (req, res) => {
    const resets = await TaskReset.findAll();
    res.json(resets);
  },
  createReset: async (req, res) => {
    const reset = await TaskReset.create(req.body);
    res.status(201).json({ message: "Reset créé", reset });
  },
  deleteReset: async (req, res) => {
    const reset = await TaskReset.findByPk(req.params.id);
    if (!reset) return res.status(404).json({ message: "Reset non trouvé" });
    await reset.destroy();
    res.json({ message: "Reset supprimé" });
  }
};

module.exports = TaskResetController;
