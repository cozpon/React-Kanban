module.exports = function(sequelize, DataTypes) {

  const status = sequelize.define("status", {
    type: { type: DataTypes.STRING, allowNull: false }
  });

  status.associate = function(models) {
    status.hasMany(models.cards, {
      foreignKey: {
        name: 'status_',
        allowNull: false
      }
    })
  }
  return status;
};