// eslint-disable-next-line import/no-unresolved
const PocketBase = require('pocketbase/cjs');

const url = 'https://ylann-mommens.pockethost.io/';
const pb = new PocketBase(url);

/**
 * Retrieves all question and response records.
 * @returns {Promise<Array>} - A promise that resolves to an array of question and response records
 */
async function getQuestionAndResponse() {
  const records = await pb.collection('questions').getFullList({
    sort: 'ordre',
    expand: 'reponses(question).produit',
  });

  return records;
}

/**
 * Add a skin care
 * @param {*} intituleSkinCare The name of the skin care
 * @param {*} idUtilisateur The id of the user
 * @returns {Promise<Object>} - A promise that resolves to the created record.
 */
async function addSkinCare(intituleSkinCare, idUtilisateur) {
  const record = await pb.collection('skinCares').create({
    intitule: intituleSkinCare,
    utilisateur: idUtilisateur,
  });

  return record;
}

module.exports = {
  getQuestionAndResponse,
  addSkinCare,
};
