const { Character } = require('../models');

const characterData = [
    {
        name: 'John Doe',
        age: 40,
        height: 1,
        background_color: 'red',
        class_id: 1,
        user_id: 1
    },
    {
        name: 'Jane Doe',
        age: 1,
        height: 1,
        background_color: 'blue',
        class_id: 2,
        user_id: 2
    },
    {
        name: 'Carlos Santana',
        age: 1,
        height: 1,
        background_color: 'green',
        class_id: 3,
        user_id: 3
    },
    {
        name: 'Jimi Hendrix',
        age: 1,
        height: 1,
        background_color: 'yellow',
        class_id: 4,
        user_id: 4
    },
    {
        name: 'John Lennon',
        age: 1,
        height: 1,
        background_color: 'purple',
        class_id: 5,
        user_id: 5
    }
]

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;