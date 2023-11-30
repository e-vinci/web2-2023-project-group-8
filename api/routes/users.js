const express = require('express');
const {
  getAllUser,
  getAllSkinCare,
  getUserInformations,
} = require('../models/admins');

const router = express.Router();

/* GET users listing. */
router.get('/users', async (req, res) => {
  const allUsers = await getAllUser();
  if (req.query.userId) {
    const userInformations = await getUserInformations(req.query.userId);
    return res.json(userInformations);
  }

  return res.json(allUsers);
});

router.get('/skinCares', async (req, res) => {
  const allSkinCare = await getAllSkinCare(req.query.userId);

  return res.json(allSkinCare);
});

module.exports = router;
