const router = require('express').Router();
const { Character } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
});

router.post('/create', async (req, res) => {
   // creates new character with the request body
   let charData = {
      ...req.body,
      'user_id': req.session.user_id
   };
   const newChar = Character.create(charData);
   res.send(newChar);
});

router.post('/', async (req, res) => {
   try{
      const newChar = await Character.create({
         ...req.body,
         user_id: req.session.user_id,
      });
      res.status(200).json(newChar);
   } catch (err) {
      res.status(400).json(err);
    }
       // console.log(req.body);
  });

router.delete('/:id', withAuth, async (req, res) => {
   try {
     const charData = await Character.destroy({
       where: {
         id: req.params.id,
         user_id: req.session.user_id,
       },
     });
 
     if (!pcharData) {
       res.status(404).json({ message: 'No character found with this id!' });
       return;
     }
 
     res.status(200).json(charData);
   } catch (err) {
     res.status(500).json(err);
   }
 });

module.exports = router;