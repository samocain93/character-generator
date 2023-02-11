const router = require('express').Router();
const { Character } = require('../../models');

router.get('/', async (req, res) => {
});

router.post('/create', async (req, res) => {
   // console.log(req.body);
   // creates new character with the request body
   const newChar = Character.create(
      req.body
   );
   res.send(newChar);
});

module.exports = router;
