const { Class } = require('../models');

const classData = [
  {
    class_name: 'Warrior',
    strength: 60,
    endurance: 80,
    charisma: 40,
    intelligence: 20,
    agility: 10,
   
  },
  {
    class_name: 'Mage',
    strength: 20,
    endurance: 40,
    charisma: 10,
    intelligence: 90,
    agility: 30,
    
  },
  {
    class_name: 'Assassin',
    strength: 60,
    endurance: 30,
    charisma: 10,
    intelligence: 40,
    agility: 90,
    
  },
  {
    class_name: 'Guardian',
    strength: 50,
    endurance: 90,
    charisma: 60,
    intelligence: 20,
    agility: 10,
    
  },
  {
    class_name: 'Strategist',
    strength: 30,
    endurance: 10,
    charisma: 60,
    intelligence: 90,
    agility: 30,
    
  }
]
const seedClasses = () => Class.bulkCreate(classData);

module.exports = seedClasses;
