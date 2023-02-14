const seedUsers = require("./user-seeds");
const seedCharacters = require("./character-seeds");
const seedClasses = require("./class-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedClasses();
  await seedCharacters();
 
  process.exit(0);
};

seedAll();
