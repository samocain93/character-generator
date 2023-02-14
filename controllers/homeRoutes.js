//
const router = require('express').Router();
const { User, Character } = require('../models');
const withAuth = require('../utils/auth');

// Rendering homepage
router.get("/", (req, res) => {
  res.render("homepage");
});

// Rendering homepage with session
router.get('/login', (req, res) => {
   if (req.session.logged_in) {
     res.redirect('/profile');
     return;
   }
   res.render('login');
 });


  // Rendering login page
router.get('/login', async (req, res) => {
   res.render('login');
});

router.get("/create", async (req, res) => {
  res.render("partials/character-form");
});

router.post("/", async (req, res) => {
  res.render("partials/form", { body: req.body });
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Character }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    console.log("Issue fetching profile");
    res.status(500).json(err);
  }
});

 router.get('/characters/:id', async (req, res) => {
  try {
    const charData = await Character.findByPk(req.params.id, {
      include: [
        {
          model: Character,
          attributes: ['name'],
        },
      ],
    });

    const char = charData.get({ plain: true });

    res.render('character', {
      ...char,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
