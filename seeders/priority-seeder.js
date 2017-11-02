'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('priorities', [
    {
      type: 'Low',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      type: 'Medium',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      type: 'High',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('priorities', [
    {
      type: 'Low',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      type: 'Medium',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      type: 'High',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  }
};
