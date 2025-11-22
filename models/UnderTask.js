module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "UnderTask",
    {
      id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
      taskId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
      title: { type: DataTypes.STRING(255), allowNull: false },
      description: { type: DataTypes.TEXT },
      points: { type: DataTypes.INTEGER, defaultValue: 0 },
      ord: { type: DataTypes.INTEGER, defaultValue: 0 },
      isCompleted: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {
      tableName: "under_tasks",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  );
};
