module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "UserTask",
    {
      id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
      userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
      taskId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
      progress: { type: DataTypes.INTEGER, defaultValue: 0 }
    },
    {
      tableName: "user_tasks",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  );
};
