//
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const charRoutes = require('./charRoutes')

router.use('/users', userRoutes);
router.use('/characters', charRoutes);

module.exports = router;
