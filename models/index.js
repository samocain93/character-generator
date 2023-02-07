const Character = require('./Character');
const Class = require('./Class');

Class.hasMany(Character, {
    foreignKey: 'class_id',
});

Character.belongsTo(Class, {
    foreignKey: 'class_id',
});

module.exports = { Character, Class };