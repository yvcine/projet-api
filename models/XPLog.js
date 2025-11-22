// models/XPLog.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "XPLog",
    {
      id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
      userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
      amount: { type: DataTypes.INTEGER, allowNull: false },
      reason: { type: DataTypes.STRING(255) },
      referenceType: { type: DataTypes.STRING(50) },
      referenceId: { type: DataTypes.INTEGER.UNSIGNED },
    },
    { tableName: "xp_logs", timestamps: true, createdAt: "createdAt", updatedAt: false }
  );
};
