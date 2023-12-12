const express = require('express');
const { getProductById, getCommentsByProductId } = require('../models/Product');

const router = express.Router();

/* GET product by ID. */
router.get('/:productId', async (req, res) => {
  const product = await getProductById(req.params.productId);

  return res.json(product);
});

/* GET comments by product ID. */
router.get('/comments/:productId', async (req, res) => {
  const product = await getCommentsByProductId(req.params.productId);

  return res.json(product);
});

module.exports = router;
