'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('classes', [
			{
				started_at: "2020-02-01",
				level_id: 1,
				teacher_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()				 
			},
			{
				started_at: "2020-02-01",
				level_id: 2,
				teacher_id: 5,
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				started_at: "2020-02-01",
				level_id: 3,
				teacher_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
				},
			{
				started_at: "2020-07-01",
				level_id: 3,
				teacher_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
			}
		], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('classes', null, {});
  }
};
