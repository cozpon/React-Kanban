module.exports = function(sequelize, DataTypes) {
  const cards = sequelize.define("cards", {
    title: { type: DataTypes.STRING, allowNull: false, unique: true }
  });

  cards.associate = function(models) {
    cards.belongsTo(models.users, {
      foreignKey: {
        name: 'created_by',
        allowNull: false
      },
      onDelete: 'NO ACTION'
    });
  };
  return cards;
};