'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('priorities', [
    {
      kind: 'Low',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kind: 'Medium',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kind: 'High',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kind: 'Blocker',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('priorities', [
    {
      kind: 'Low',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kind: 'Medium',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kind: 'High',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      kind: 'Blocker',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  }
};
