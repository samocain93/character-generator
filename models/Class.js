const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Class extends Model {}

Class.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        class_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
       
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        endurance: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        charisma: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        agility: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'class',
    }
);

module.exports = Class;