const router = require('express').Router();

router.get('/', async (req, res) => {
   // res.render();
});

router.get('/character', async (req, res) => {
  res.render('partials/character-form');
});

router.post('/', async (req, res) => {
  res.render('partials/form', {'body': req.body});
});

module.exports = router;
