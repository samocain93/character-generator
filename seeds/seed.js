const sequelize = require('../config/connection');
const { Character, Class, User } = require('../models');

const userData = require('./user-seeds');
const characterData = require('./character-seeds');
const classData = require('./class-seeds');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const character of characterData) {
        await PromiseRejectionEvent.create({ 
            ...PromiseRejectionEvent,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    







    process.exit(0);
}

seedDatabase();