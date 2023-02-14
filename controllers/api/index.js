//
const router = require('express').Router();
const charRoutes = require('./charRoutes');
const classRoutes = require('./classRoutes');
const userRoutes = require('./userRoutes');

router.use('/characters', charRoutes);
router.use('/classes', classRoutes);
router.use('/users', userRoutes);

module.exports = router;
