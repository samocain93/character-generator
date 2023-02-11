const seedClasses = require('./class-seeds');
const seedCharacters = require('./character-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedClasses();
    await seedCharacters();
    await seedUsers();
};

seedAll();
