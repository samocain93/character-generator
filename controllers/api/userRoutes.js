const router = require("express").Router();
const { User, Character, Class } = require("../../models");
const withAuth = require("../../utils/auth");

// get all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
