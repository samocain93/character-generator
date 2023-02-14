const Character = require("./Character");
const Class = require("./Class");
const User = require("./User");

// User.hasMany(Character, {
//     foreignKey: 'user_id',

// });

// Character.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'cascade'
// })

// Character.hasOne(Class, {
//     foreignKey: 'class_id',
// })

// Class.belongsTo(Character, {
//     foreignKey: 'class_id',
//     onDelete: 'cascade'
// })

User.hasMany(Character, {
  foreignKey: "user_id",
  // foreignKeyConstraint: false,
});

Character.belongsTo(User, {
  foreignKey: "user_id",
  //   constraints: false
});

Character.hasOne(Class, {
  foreignKey: "class_id",
  onDelete: "cascade",
  //   foreignKeyConstraint: false
});

Class.belongsTo(Character, {
  foreignKey: "class_id",
  // foreignKeyConstraint: false
});

module.exports = { Character, Class, User };
//
