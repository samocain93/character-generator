const Character = require('./Character');
const Class = require('./Class');
const User = require('./User');

// User.hasMany(Character, {
//     foreignKey: 'user_id'
// });

// Character.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// })

// Character.hasOne(Class, {
//     foreignKey: 'character_id',
//     onDelete: 'CASCADE',
// })

// Class.belongsTo(Character, {
//     foreignKey: 'character_id',
//     onDelete: 'CASCADE',
// })

module.exports = { Character, Class, User };
