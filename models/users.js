module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    username: DataTypes.STRING
  }, {
    tableName: 'users'
  });

  users.associate = function(models) {
    users.hasMany(models.cards)
  }
  return users;
};