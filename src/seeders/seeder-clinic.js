'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Clinics', [
            {
                name: 'Popular',
                address: 'sadar,Dinajpur',
                image: 'usa-az.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Square',
                address: 'sadar,Dinajpur',
                image: 'mayo-clinic-health-system.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'New clinic',
                address: ', sadar,Dinajpur',
                image: 'campbell-clinic.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Station Road Clinic',
                address: 'sadar,Dinajpur',
                image: 'cleveland-clinic-usa.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'New Medicine',
                address: 'sadar,Dinajpur',
                image: 'clinic-Ft-McCoy.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Clinics', null, {});
    }
};
