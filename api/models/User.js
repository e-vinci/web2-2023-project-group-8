/* eslint-disable camelcase */
// eslint-disable-next-line import/no-unresolved
const Pocketbase = require('pocketbase/cjs');

const url = 'https://ylann-mommens.pockethost.io/';
const pb = new Pocketbase(url);

/**
 * @param {*} username the username of the user
 * @param {*} password the password of the user
 * @returns {Promise<Object>} - A promise that resolves to the created record.
 */
async function loginUser(username, password) {
  try {
    const authData = await pb.collection('utilisateurs').getFullList({
      filter: `username = "${username}" && mot_de_passe = "${password}"`,
    });

    return authData;
  } catch (error) {
    throw new Error(`Erreur lors de la requête d'authentification : ${error}`);
  }
}

/**
 * @param {*} username the username of the user
 * @param {*} password the password of the user
 * @param {*} email the email of the user
 * @param {*} nom thr name of the user
 * @param {*} prenom the firstname of the user
 * @param {*} photo the photo of the user
 * @returns {Promise<Object>} - A promise that resolves to the created record.
 */
async function registerUser(user, passwd, mail, firstname, lastname) {
  try {
    const record = await pb.collection('utilisateurs').create({
      username: user,
      email: mail,
      emailVisibility: true,
      prenom: firstname,
      nom: lastname,
      mot_de_passe: passwd,
      password: passwd,
      passwordConfirm: passwd,
    });
    return record;
  } catch (error) {
    throw new Error(`Erreur lors de la requête de création d'un user : ${error}`);
  }
}

module.exports = {
  loginUser,
  registerUser,
};
