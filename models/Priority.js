module.exports = function(sequelize, DataTypes) {

  const Priority = sequelize.define("Priority", {
    kind: DataTypes.STRING
  }, {
    tableName: 'priorities'
  });

Priority.associate = function(models) {
    Priority.hasMany(models.Card, { foreignKey: 'priorityId', as: 'Priority' });
  } // using hasMany relationship vs the belongsTo which will give different foreign keys
  return Priority;
};