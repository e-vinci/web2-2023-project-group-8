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
  const record = await pb.collection('utilisateurs').getOne(username);
  if (!record) return undefined;
  if (record.mot_de_passe !== password) return undefined;
  return record;
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
async function registerUser(username, password, email, nom, prenom, photo) {
  const record = await pb.collection('utilisateurs').create({
    username,
    email,
    nom,
    prenom,
    photo_profil: photo,
    mot_de_passe: password,
  });
  return record;
}

module.exports = {
  loginUser,
  registerUser,
};
