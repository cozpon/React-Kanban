module.exports = function(sequelize, DataTypes) {
  const Card = sequelize.define("Card", {
    title: { type: DataTypes.STRING, allowNull: false, unique: true },
    created_by: { type: DataTypes.INTEGER },
    assigned_to: { type: DataTypes.INTEGER }
  }, {
    tableName : 'cards'
  });

  Card.associate = function(models) {
    Card.belongsTo(models.User, {foreignKey: 'created_by', as: 'Creator' })
    Card.belongsTo(models.User, {foreignKey: 'assigned_to', as: 'Dev' })
    Card.belongsTo(models.Priority, {foreignKey: 'priorityId', as: 'Priority' })
    Card.belongsTo(models.Status, {foreignKey: 'statusId', as: 'Status' })
  }

  return Card;
};

