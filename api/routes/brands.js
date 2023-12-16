const express = require('express');
const Brand = require('../models/Brand');

const router = express.Router();

router.get('/', async (req, res) => {
  const records = await Brand.getBrandsList();
  return res.json(records);
});

module.exports = router;
