module.exports = function(sequelize, DataTypes) {
  const priorities = sequelize.define("priorities", {
    type: DataTypes.STRING
  });

priorities.associate = function(models) {
    priorities.hasMany(models.cards, {
      foreignKey: {
        name: 'priorities_',
        allowNull: false
      }
    })
  }

  return priorities;
};