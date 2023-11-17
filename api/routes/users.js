const express = require('express');
const { getAllUser } = require('../models/utilisateurs');

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
  const allUsers = await getAllUser();

  return res.json(allUsers);
});

module.exports = router;
