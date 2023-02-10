const sequelize = require("../config/connection");
const { Class } = require("../models");

const classData = [
   {
      id: 1,
      class_name: "Rogue",
      strength: 1,
      endurance: 2,
      charisma: 3,
      intelligence: 4,
      agility: 5,
   },
   {
      id: 2,
      class_name: "Fighter",
      strength: 5,
      endurance: 4,
      charisma: 3,
      intelligence: 2,
      agility: 1
   },
   {
      id: 3,
      class_name: "Mage",
      strength: 1,
      endurance: 3,
      charisma: 5,
      intelligence: 5,
      agility: 2

   },
   {
      id: 4,
      class_name: "Bard",
      strength: 2,
      endurance: 4,
      charisma: 4,
      intelligence: 3,
      agility: 1
   }
];


const seedClasses = () => Class.bulkCreate(classData);

module.exports = seedClasses;
