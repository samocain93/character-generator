const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
    {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
     
        age: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        background_color: {
            type: DataTypes.STRING
        },

        class_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'class',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'character',
    }
);

module.exports = Character;