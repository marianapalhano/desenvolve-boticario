'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('levels', [
			{
				descr_level: 'básico',
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				descr_level: 'intermediário',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				descr_level: 'avançado',
				createdAt: new Date(),
				updatedAt: new Date()
			} 
	], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('levels', null, {});
  }
};
