const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = [
  {
    username: "johndoe",
    email: "johndoe@gmail.com",
    password: "password123",
   
  },
  {
    username: "janedoe",
    email: "janedoe@gmail.com",
    password: "password123",
   
  },
  {
    username: "carlossantana",
    email: "carlos@gmail.com",
    password: "password123",
    
  },
  {
    username: "jimmyhendrix",
    email: "jimmy@gmail.com",
    password: "password123",

  },
  {
    username: "JohnLennon",
    email: "johnlennon@gmail.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
