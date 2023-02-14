const router = require('express').Router();
const { Class } = require('../../models');

router.get('/', async (req, res) => {
   res.send(await Class.findAll());
});

module.exports = router;


