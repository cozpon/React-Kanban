module.exports = function(sequelize, DataTypes) {
  const priority = sequelize.define("priority", {
    type: DataTypes.STRING
  });

priority.associate = function(models) {
    priority.hasMany(models.cards, {
      foreignKey: {
        name: 'priorities_',
        allowNull: false
      }
    })
  }

  return priority;
};