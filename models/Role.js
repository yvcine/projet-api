module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Role",
    {
      id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING(100), allowNull: false }
    },
    {
      tableName: "roles",
      timestamps: false
    }
  );
};
