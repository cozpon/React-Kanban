module.exports = function(sequelize, DataTypes) {

  const Card = sequelize.define("Card", {
    title: { type: DataTypes.STRING, allowNull: false, unique: true },
    created_by: { type: DataTypes.INTEGER },
    assigned_to: { type: DataTypes.INTEGER }
  }, {
    tableName : 'cards' // name the table lowercase otherwise Sequelize will name it for you
  });

  Card.associate = function(models) { // giving associations, foreign key assignments
    Card.belongsTo(models.User, {foreignKey: 'created_by', as: 'Creator' })
    Card.belongsTo(models.User, {foreignKey: 'assigned_to', as: 'Dev' })
    Card.belongsTo(models.Priority, {foreignKey: 'priorityId', as: 'Priority' })
    Card.belongsTo(models.Status, {foreignKey: 'statusId', as: 'Status' })
  } // for some reason had to have Card belong to EVERYTHING
    // which makes sense if you think about it
  return Card;
};

