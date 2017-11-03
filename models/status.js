module.exports = function(sequelize, DataTypes) {

  const Status = sequelize.define("Status", {
    type: DataTypes.STRING
  }, {
    tableName : 'statuses'
  });

  Status.associate = function(models) {
    Status.hasMany(models.Card, { foreignKey: 'statusId', as: 'Status' });
  };
  return Status;
};