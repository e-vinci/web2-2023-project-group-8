const express = require('express');
const {
  getAllUser,
  getAllSkinCare,
} = require('../models/admins');

const router = express.Router();

/* GET users listing. */
router.get('/users', async (req, res) => {
  const allUsers = await getAllUser();

  return res.json(allUsers);
});

router.get('/skinCares', async (req, res) => {
  const allSkinCare = await getAllSkinCare(req.query.userId);

  return res.json(allSkinCare);
});

module.exports = router;
