
//
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Rendering homepage
router.get('/', (req, res) => {
    res.render('homepage');
  });

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