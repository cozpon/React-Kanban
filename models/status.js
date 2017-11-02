module.exports = function(sequelize, DataTypes) {

  const statuses = sequelize.define("statuses", {
    type: { type: DataTypes.STRING, allowNull: false }
  });

  statuses.associate = function(models) {
    statuses.hasMany(models.cards, {
      foreignKey: {
        name: 'statuses_',
        allowNull: false
      }
    })
  }
  return statuses;
};