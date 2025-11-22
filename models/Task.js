// models/TaskReset.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "TaskReset",
    {
      id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
      taskId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
      period: { type: DataTypes.STRING(20), allowNull: false }, // daily, weekly...
      lastResetAt: { type: DataTypes.DATE, allowNull: true },
      nextResetAt: { type: DataTypes.DATE, allowNull: true },
    },
    { tableName: "task_resets", timestamps: true, createdAt: "createdAt", updatedAt: "updatedAt" }
  );
};
