const { Character } = require("../models");

const characterData = [
  {
    name: "John Doe",
    age: 40,
    height: 5.5,
    class_id: 1,
    user_id: 1,
  },
  {
    name: "Jane Doe",
    age: 60,
    height: 4.5,
    class_id: 2,
    user_id: 2,
  },
  {
    name: "Carlos Santana",
    age: 75,
    height: 5.833,
    class_id: 3,
    user_id: 3,
  },
  {
    name: "Jimi Hendrix",
    age: 81,
    height: 5.833,
    class_id: 4,
    user_id: 4,
  },
  {
    name: "John Lennon",
    age: 83,
    height: 5.833,
    class_id: 5,
    user_id: 5,
  },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;
