const express = require('express');
const { getProductById } = require('../models/products');

const router = express.Router();

/* GET product by ID. */
router.get('/:productId', async (req, res) => {
  const product = await getProductById(req.params.productId);

  return res.json(product);
});

module.exports = router;
