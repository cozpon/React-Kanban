module.exports = function(sequelize, DataTypes) {

  const statuses = sequelize.define("statuses", {
    type: { type: DataTypes.STRING, allowNull: false }
  }, {
    tableName : 'statuses'
  });

  statuses.associate = function(models) {
    statuses.hasMany(models.cards, {
      foreignKey: {
        name: 'statusId'
      }
    });
  };
  return statuses;
};