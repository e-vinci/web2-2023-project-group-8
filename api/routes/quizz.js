const express = require('express');
const {
  getQuestionAndResponse,
} = require('../models/Quizz');
const {
  addProductIntoListesProduitsWithSkinCare,
} = require('../models/Product');

const router = express.Router();

/* GET Question and response */
router.get('/questions', async (req, res) => {
  const allQuestion = await getQuestionAndResponse();
  return res.json(allQuestion);
});

router.post('/addProductToSkinCare', async (req, res) => {
  const { skinCareId, productId } = req.body;

  const record = await addProductIntoListesProduitsWithSkinCare(skinCareId, productId);
  return res.json(record);
});

module.exports = router;
