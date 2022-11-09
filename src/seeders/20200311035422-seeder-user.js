'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                name: 'admin - Wahidul Islam',
                email: 'admin@gmail.com',
                password: '$2a$07$Bq0hCq3kVrvKUHfMT0NJROmQkx09aEQkGlwBGEdw799YJvWqH1kuy', //123456
                address: 'Dinajpur',
                phone: '088456732',
                avatar: 'admin.png',
                roleId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Doctor - Haque',
                email: 'doctor@gmail.com',
                password: '$2a$07$Bq0hCq3kVrvKUHfMT0NJROmQkx09aEQkGlwBGEdw799YJvWqH1kuy', //123456
                address: 'Dinajpur',
                phone: '088456735',
                avatar: 'doctor3.jpg',
                roleId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Doctor - Bodruddhua',
                email: 'doctor5@gmail.com',
                password: '$2a$07$Bq0hCq3kVrvKUHfMT0NJROmQkx09aEQkGlwBGEdw799YJvWqH1kuy', //123456
                address: 'Dianjpur',
                phone: '088456735',
                avatar: 'doctor4.jpg',
                roleId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Doctor - Abul Kalam',
                email: 'doctor10@gmail.com',
                password: '$2a$07$Bq0hCq3kVrvKUHfMT0NJROmQkx09aEQkGlwBGEdw799YJvWqH1kuy', //123456
                address: 'Dinajpur',
                phone: '088456735',
                avatar: 'doctor1.jpg',
                roleId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Doctor - Masum Billah',
                email: 'doctor1@gmail.com',
                password: '$2a$07$Bq0hCq3kVrvKUHfMT0NJROmQkx09aEQkGlwBGEdw799YJvWqH1kuy', //123456
                address: 'Dianjpur',
                phone: '088456735',
                avatar: 'doctor2.jpg',
                roleId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Doctor - Aslam',
                email: 'doctor2@gmail.com',
                password: '$2a$07$Bq0hCq3kVrvKUHfMT0NJROmQkx09aEQkGlwBGEdw799YJvWqH1kuy', //123456
                address: 'Dianjpur',
                phone: '088456735',
                avatar: 'doctor3.jpg',
                roleId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Doctor - Dipu Sarker',
                email: 'doctor3@gmail.com',
                password: '$2a$07$Bq0hCq3kVrvKUHfMT0NJROmQkx09aEQkGlwBGEdw799YJvWqH1kuy', //123456
                address: 'Dinajpur',
                phone: '088456735',
                avatar: 'doctor4.jpg',
                roleId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Supporter - Raihanul',
                email: 'supporter@gmail.com',
                password: '$2a$07$Bq0hCq3kVrvKUHfMT0NJROmQkx09aEQkGlwBGEdw799YJvWqH1kuy', //123456
                address: 'Basherhat',
                phone: '088456736',
                avatar: 'supporter.png',
                roleId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Supporter - Atik',
                email: 'supporter1@gmail.com',
                password: '$2a$07$Bq0hCq3kVrvKUHfMT0NJROmQkx09aEQkGlwBGEdw799YJvWqH1kuy', //123456
                address: 'Dinajpur',
                phone: '088456736',
                avatar: 'supporter.png',
                roleId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Supporter - Morshadul Shohan',
                email: 'supporter2@gmail.com',
                password: '$2a$07$Bq0hCq3kVrvKUHfMT0NJROmQkx09aEQkGlwBGEdw799YJvWqH1kuy', //123456
                address: 'Dinajpur',
                phone: '088456736',
                avatar: 'supporter.png',
                roleId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Supporter - MA Wahid',
                email: 'supporter3@gmail.com',
                password: '$2a$07$Bq0hCq3kVrvKUHfMT0NJROmQkx09aEQkGlwBGEdw799YJvWqH1kuy', //123456
                address: 'Dinajpur',
                phone: '088456736',
                avatar: 'supporter.png',
                roleId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
