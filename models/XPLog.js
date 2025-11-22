module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "XPLog",
    {
      id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
      userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
      taskId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
      xpGained: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
      tableName: "xp_logs",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  );
};
