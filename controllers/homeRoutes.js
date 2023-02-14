//
const router = require("express").Router();
const { User, Character, Class } = require("../models");
const withAuth = require("../utils/auth");

// Rendering homepage
router.get("/", (req, res) => {
  res.render("homepage");
});

// Rendering homepage with session
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

// Rendering login page
router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/create", async (req, res) => {
  res.render("partials/character-form");
});

router.post("/", async (req, res) => {
  res.render("partials/form", { body: req.body });
});
// renders most recent character sheet view in body
router.get('/view', async (req, res) => {
   const newCharData = await Character.findOne({
      where: { 'user_id': req.session.user_id },
      order: [ [ 'id', 'DESC' ]]
   })
   const newChar = newCharData.get({ plain: true });

   const charClassData = await Class.findByPk(newChar.class_id);
   const charClass = charClassData.get({ plain: true });
   const className = charClass.class_name;

   const userData = await User.findByPk(newChar.user_id);
   const user = userData.get({ plain: true });
   const username = user.username;
   res.render("partials/character-sheet", {...newChar, className: className, username: username});
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

module.exports = router;
