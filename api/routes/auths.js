/* eslint-disable no-alert */
const express = require('express');
const { registerUser } = require('../models/User');
const { loginUser } = require('../models/User');

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
    throw new Error(`Erreur lors de l'appel de la fonction registerUser: ${error}`);
  }
});

/**
 * @param {String} userId the id of the user
 * @returns {Promise<Object>} - A promise that resolves to the created record.
 */
router.post('/login', async (req, res) => {
  const {
    username, password,
  } = req.body;
  const authData = await loginUser(username, password);

  // Send a success response or additional data if needed
  return res.json(authData);

  // Handle the specific error for user not found
});

module.exports = router;
