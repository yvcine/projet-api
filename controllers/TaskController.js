// controllers/TaskController.js
const { Task, UnderTask } = require("../models");

exports.create = async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, createdBy: req.user?.id || null });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const { count, rows } = await Task.findAndCountAll({ limit, offset });
    res.json({ total: count, page, limit, data: rows });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id, { include: UnderTask });
    if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
    await task.update(req.body);
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
    await task.destroy();
    res.json({ message: "Tâche supprimée" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};
