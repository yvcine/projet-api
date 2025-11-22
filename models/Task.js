module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Task",
    {
      id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
      title: { type: DataTypes.STRING(255), allowNull: false },
      description: { type: DataTypes.TEXT },
      points: { type: DataTypes.INTEGER, defaultValue: 0 }
    },
    {
      tableName: "tasks",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  );
};
