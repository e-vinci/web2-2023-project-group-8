const express = require('express');
const {
  getProductById, getCommentsByProductId, addCommentToProduct, getAllProductsByTypes,
} = require('../models/Product');

const router = express.Router();

/* GET product by ID. */
router.get('/:productId', async (req, res) => {
  const product = await getProductById(req.params.productId);

  return res.json(product);
});

/* GET comments by product ID. */
router.get('/comments/:productId', async (req, res) => {
  const comments = await getCommentsByProductId(req.params.productId);

  return res.json(comments);
});

/* POST add comment to product. */
router.post('/addComment', async (req, res) => {
  const {
    productId, userId, comment, numStars,
  } = req.body;

  const record = await addCommentToProduct(productId, userId, comment, numStars);
  return res.json(record);
});

/* GET products by type. */
router.get('/similar/:productId', async (req, res) => {
  const products = await getAllProductsByTypes(req.params.productId);

  return res.json(products);
});

module.exports = router;
