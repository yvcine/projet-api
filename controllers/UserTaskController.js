// controllers/UserTaskController.js
const { UserTask } = require("../models");

exports.assign = async (req, res) => {
  try {
    const { userId, taskId } = req.body;
    const ut = await UserTask.create({ userId, taskId });
    res.status(201).json(ut);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await UserTask.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const ut = await UserTask.findByPk(req.params.id);
    if (!ut) return res.status(404).json({ message: "Non trouvé" });
    await ut.update(req.body);
    res.json(ut);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const ut = await UserTask.findByPk(req.params.id);
    if (!ut) return res.status(404).json({ message: "Non trouvé" });
    await ut.destroy();
    res.json({ message: "Supprimé" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};
