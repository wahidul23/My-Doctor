'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Places', [
            {
                name: 'Dinajpur',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Rangpur',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Bogura',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Dhaka',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Thakurgaon',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Places', null, {});
    }
};
