module.exports = function(sequelize, DataTypes) {

  const users = sequelize.define("users", {
    username: { type: DataTypes.STRING, allowNull: false, unique: true }
  }, {
    tableName: 'users'
  });

  users.associate = function(models) {
    users.hasMany(models.cards)
  }
  return users;
};