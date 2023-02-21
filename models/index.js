const Character = require("./Character");
const Class = require("./Class");
const User = require("./User");

User.hasMany(Character, {
  foreignKey: "user_id",
});

Character.belongsTo(User, {
  foreignKey: "user_id",
});

Class.hasMany(Character, {
  foreignKey: {
    name: "class_id",
  },
});

Character.belongsTo(Class, {
  foreignKey: {
    name: "class_id",
  },
});

module.exports = { Character, Class, User };
