const express = require('express');
const Brand = require('../models/Brand');

const router = express.Router();

router.get('/', async (req, res) => {
  const records = await Brand.getBrandsList();
  return res.json(records);
});

router.get('/:brandId', async (req, res) => {
  const records = await Brand.getBrandNameById(req.params.brandId);
  return res.json(records);
});

module.exports = router;
