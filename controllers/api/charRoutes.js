const router = require('express').Router();
const { Character } = require('../../models');

router.get('/', async (req, res) => {
});

router.post('/create', async (req, res) => {
   // console.log(req.body);
   // creates new character with the request body
   let charData = {
      ...req.body,
      'user_id': req.session.user_id
   };
   const newChar = Character.create(charData);
   res.send(newChar);
});

module.exports = router;