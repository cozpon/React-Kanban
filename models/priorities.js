module.exports = function(sequelize, DataTypes) {
  const priorities = sequelize.define("priorities", {
    kind: DataTypes.STRING
  }, {
    tableName: 'priorities'
  });

priorities.associate = function(models) {
    priorities.hasMany(models.cards, {
      foreignKey: {
        name: 'priorityId'
      }
    });
  };

  return priorities;
};