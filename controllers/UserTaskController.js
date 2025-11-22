const UserTask = require("../models/UserTask");
const Task = require("../models/Task");
const XPLog = require("../models/XPLog");

const UserTaskController = {

  getTasksForUser: async (req, res) => {
    const userId = req.params.userId;
    const tasks = await UserTask.findAll({ where: { user_id: userId }, include: Task });
    res.json(tasks);
  },

  completeTask: async (req, res) => {
    const { user_id, task_id } = req.body;
    const userTask = await UserTask.findOne({ where: { user_id, task_id } });
    if (!userTask) return res.status(404).json({ message: "Tâche non trouvée pour cet utilisateur" });

    userTask.completed = true;
    userTask.completed_at = new Date();
    await userTask.save();

    // Ajouter XP
    const task = await Task.findByPk(task_id);
    await XPLog.create({ user_id, task_id, xp_gained: task.xp_reward });

    res.json({ message: "Tâche complétée", userTask });
  },

  resetTasks: async (req, res) => {
    await UserTask.update({ completed: false, completed_at: null }, { where: {} });
    res.json({ message: "Toutes les tâches réinitialisées" });
  }
};

module.exports = UserTaskController;
