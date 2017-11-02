module.exports = function(sequelize, DataTypes) {
  const cards = sequelize.define("cards", {
    title: { type: DataTypes.STRING, allowNull: false, unique: true }
  }, {
    tableName : 'cards'
  });

  cards.associate = function(models) {
    cards.belongsTo(models.users, {
      foreignKey: {
        name: 'created_by'
      },
      onDelete: 'NO ACTION'
    });
  };

  return cards;
};