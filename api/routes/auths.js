const express = require('express');
const { loginUser, registerUser } = require('../models/User');

const router = express.Router();

/**
 * @param {*} username the username of the user
 * @param {*} password the password of the user
 * @param {*} email the email of the user
 * @param {*} nom the name of the user
 * @param {*} prenom the firstname of the user
 * @param {*} photo the photo of the user
 * @returns {Promise<Object>} - A promise that resolves to the created record.
 */
router.post('/register', async (req, res) => {
  const {
    username, password, email, nom, prenom, photo,
  } = req.body;
  const user = await registerUser(username, password, email, nom, prenom, photo);
  return res.json(user);
});

/**
 * @param {String} userId the id of the user
 * @returns {Promise<Object>} - A promise that resolves to the created record.
 */
router.post('/login:username', async (req, res) => {
  const log = await loginUser(req.params.username);
  return res.json(log);
});

module.exports = router;
