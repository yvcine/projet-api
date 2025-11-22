// controllers/TaskResetController.js
const { TaskReset } = require("../models");

exports.create = async (req, res) => {
  try {
    const tr = await TaskReset.create(req.body);
    res.status(201).json(tr);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await TaskReset.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const tr = await TaskReset.findByPk(req.params.id);
    if (!tr) return res.status(404).json({ message: "Non trouvé" });
    await tr.destroy();
    res.json({ message: "Supprimé" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};
