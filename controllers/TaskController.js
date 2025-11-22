const Task = require("../models/Task");

const TaskController = {
  getAllTasks: async (req, res) => {
    const tasks = await Task.findAll();
    res.json(tasks);
  },
  getTaskById: async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
    res.json(task);
  },
  createTask: async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ message: "Tâche créée", task });
  },
  updateTask: async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
    await task.update(req.body);
    res.json({ message: "Tâche mise à jour", task });
  },
  deleteTask: async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
    await task.destroy();
    res.json({ message: "Tâche supprimée" });
  }
};

module.exports = TaskController;
