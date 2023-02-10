//
const router = require('express').Router();
const charRoutes = require('./charRoutes');
const classRoutes = require('./classRoutes');

router.use('/characters', charRoutes);
router.use('/classes', classRoutes);

module.exports = router;
