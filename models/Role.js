// models/Role.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Role",
    {
      id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING(50), allowNull: false, unique: true },
      description: { type: DataTypes.STRING(255) },
    },
    { tableName: "roles", timestamps: true, createdAt: "createdAt", updatedAt: "updatedAt" }
  );
};
