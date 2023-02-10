const sequelize = require('../config/connection');

const seedClasses = require('./class-seeds');
const seedUsers = require('./user-seeds');

const seedDatabase = async () => {
   await seedClasses();
   await seedUsers();

   process.exit(0);
};

seedDatabase();
