const express = require('express');
const exhb = require('express-handlebars');
const fs = require('fs');

import { char-name , char-height, char-class, char-background-color } from "/views/partials/form.handlebars";

const charName = document.getElementById("char-name");
const charHeight = document.getElementById("char-height");
const charClass = document.getElementById("char-class");
const bckgrndColor = document.getElementById("char-background-color")

/* To generate character form I need to grab the id of the entire form and render to page.
   alternatively grab each individual input id 
   -- I need to grab the textcontent of the input
*/

function generateForm() {
   const createName = {
      statementQuest: 'Enter Desired Character name'   
   }
   document.getElementById 
}


function createCharacter(){
}

function generateCharacterSheet(){

}