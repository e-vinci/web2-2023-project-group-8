const express = require('express');
const {
  getAllUser,
  getAllSkinCares,
  getUserInformations,
  getSkinCares,
} = require('../models/Admin');

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
  const allSkinCare = await getAllSkinCares();
  if (req.query.userId) {
    const skinCareInformations = await getSkinCares(req.query.userId);
    return res.json(skinCareInformations);
  }
  return res.json(allSkinCare);
});

module.exports = router;
