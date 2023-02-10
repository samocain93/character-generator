const router = require('express').Router();
const { Character } = require('../../models/Character.js');

router.post('/character/create', async (req, res) => {
   // creates new blank character and assigns the values 
   let newb = new Character();
   newb.id = 1;
   newb.name = "Fred";
   newb.height = 5;
   newb.background_color = red

});

module.exports = router;
