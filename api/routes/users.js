const express = require('express');

const {
  addSkinCare,
  getLastSkinCare,
} = require('../models/Skincare');

const router = express.Router();

router.post('/skinCare/add', async (req, res) => {
  const { intitule, idUtilisateur } = req.body;

  const record = await addSkinCare(intitule, idUtilisateur);

  return res.json(record);
});

router.get('/skinCares/last', async (req, res) => {
  const { userId } = req.query;

  const records = await getLastSkinCare(userId);

  return res.json(records);
});

module.exports = router;
