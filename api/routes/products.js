/* eslint-disable max-len */
const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

/* GET product by ID. */
router.get('/:productId', async (req, res) => {
  const product = await Product.getProductById(req.params.productId);

  return res.json(product);
});

/* GET comments by product ID. */
router.get('/comments/:productId', async (req, res) => {
  const comments = await Product.getCommentsByProductId(req.params.productId);

  return res.json(comments);
});

/* POST add comment to product. */
router.post('/addComment', async (req, res) => {
  const {
    productId, userId, comment, numStars,
  } = req.body;

  const record = await Product.addCommentToProduct(productId, userId, comment, numStars);
  return res.json(record);
});

// TODO
router.post('/addProduct', async (req, res) => {
  const {
    name,
    brand,
    price,
    attributes,
    ingredients,
    contenance,
    contenanceUnit,
    description,
  } = req.body;
  const record = await Product.addNewProduct(name, brand, price, attributes, ingredients, contenance, contenanceUnit, description);
  return res.json(record); // changer en redirect vers le new product
});

/* GET products by type. */
router.get('/similar/:productId', async (req, res) => {
  const products = await Product.getAllProductsByTypes(req.params.productId);

  return res.json(products);
});

module.exports = router;
