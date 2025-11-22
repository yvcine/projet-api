module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "TaskReset",
    {
      id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
      taskId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
      resetDate: { type: DataTypes.DATE, allowNull: false }
    },
    {
      tableName: "task_resets",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  );
};
