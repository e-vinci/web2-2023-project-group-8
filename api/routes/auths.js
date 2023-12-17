/* eslint-disable no-alert */
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
  try {
    const {
      username, password, email, nom, prenom, photo,
    } = req.body;
    const user = await registerUser(username, password, email, nom, prenom, photo);
    return res.json(user);
  } catch (error) {
    // eslint-disable-next-line no-template-curly-in-string
    throw new Error('Erreur lors de la requête fetch : ${error}');
  }
});

/**
 * @param {String} userId the id of the user
 * @returns {Promise<Object>} - A promise that resolves to the created record.
 */
router.post('/login', async (req, res) => {
  try {
    const log = await loginUser(req.body.username, req.body.password);
    return res.json(log);
  } catch (error) {
    // eslint-disable-next-line no-template-curly-in-string
    throw new Error('Erreur lors de la requête fetch : ${error}');
  }
});

module.exports = router;
