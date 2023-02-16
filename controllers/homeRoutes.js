//
const router = require("express").Router();
const { User, Character, Class } = require("../models");
const withAuth = require("../utils/auth");

// Rendering homepage
router.get("/", (req, res) => {
  res.render("homepage", {  
    logged_in: req.session.logged_in 
  });
});

// Rendering login page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }
  res.render("login");
});

// rendering create character page
router.get("/create", withAuth, async (req, res) => {
  res.render("partials/character-form", { logged_in: req.session.logged_in });
});

// rendering profile page
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

// Rendering character sheet not in a partial
router.get("/characters/:id", async (req, res) => {
  const charData = await Character.findByPk(req.params.id);
  const char = charData.get({ plain: true });

  const charClassData = await Class.findByPk(char.class_id);
  const charClass = charClassData.get({ plain: true });

  const renderOptions = {
    ...char,
    ...charClass,
    logged_in: req.session.logged_in,
  };
  res.render("character-display", renderOptions);
});

// other login route
// router.get("/login", (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect("/");
//     return;
//   }
//   res.render("login");
// });

// router.get("/", async (req, res) => {
//   try {
//     const characterData = await Character.findAll({
//       include: [
//         {
//           model: User,
//         },
//         {
//           model: Class
//         }
//       ],
//     });

//     const characters = characterData.map((character) =>
//       character.get({ plain: true })
//     );
//      console.log(characters)
//     res.render("homepage", {
//       characters,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



// Rendering login page
// router.get('/login', async (req, res) => {
//    res.render('login');
// });



// router.post("/", async (req, res) => {
//   res.render("partials/form", { body: req.body });
// });

// renders most recent character sheet view in body
// router.get("/characters/:id", async (req, res) => {
//   const charData = await Character.findByPk(req.params.id);
//   const char = charData.get({ plain: true });

//   const charClassData = await Class.findByPk(char.class_id);
//   const charClass = charClassData.get({ plain: true });

//   const renderOptions = {
//     ...char,
//     ...charClass,
//     logged_in: req.session.logged_in,
//   };
//   res.render("partials/character-sheet", renderOptions);
// });





//  router.get('/characters/:id', async (req, res) => {
//   try {
//     const charData = await Character.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const char = charData.get({ plain: true });

//     res.render('character-display', {
//       ...char,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
