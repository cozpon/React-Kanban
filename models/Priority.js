module.exports = function(sequelize, DataTypes) {

  const Priority = sequelize.define("Priority", {
    kind: DataTypes.STRING
  }, {
    tableName: 'priorities'
  });

Priority.associate = function(models) {
    Priority.hasMany(models.Card, { foreignKey: 'priorityId', as: 'Priority' });
  }
  return Priority;
};