const express = require('express');
const exhb = require('express-handlebars');
const fs = require('fs');

import { char-name , char-height, char-class, char-background-color } from "/views/partials/form.handlebars";

const charName = document.getElementById("char-name");
const charHeight = document.getElementById("char-height");
const charClass = document.getElementById("char-class");
const bckgrndColor = document.getElementById("char-background-color")
