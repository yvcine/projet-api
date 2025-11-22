// models/UserTask.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "UserTask",
    {
      id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
      userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
      taskId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
      status: { type: DataTypes.STRING(50), defaultValue: "assigned" },
      progress: { type: DataTypes.DECIMAL(5, 2), defaultValue: 0 },
      startedAt: { type: DataTypes.DATE },
      completedAt: { type: DataTypes.DATE },
    },
    {
      tableName: "user_tasks",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      indexes: [{ unique: true, fields: ["userId", "taskId"] }],
    }
  );
};
