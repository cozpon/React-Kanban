'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('statuses', [
    {
      type: 'Queue',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      type: 'Progress',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      type: 'Done',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('statuses', [
    {
      type: 'Queue',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      type: 'Progress',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      type: 'Done',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  }
};
