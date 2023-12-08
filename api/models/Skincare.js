// eslint-disable-next-line import/no-unresolved
const PocketBase = require('pocketbase/cjs');

const url = 'https://ylann-mommens.pockethost.io/';
const pb = new PocketBase(url);

/**
 * Retrieves all skin care records.
 * @returns {Promise<Array>} - A promise that resolves to an array of skin care records.
 */
async function getAllSkinCares() {
  const records = await pb.collection('skinCares').getFullList({
    sort: '-created',
    expand: 'listes_produits(skinCare).produit',
  });
    // console.log(records);
  return records;
}

/**
 * Retrieves all the skin care of one specific user
 * @param {*} userId  The id of the user
 * @returns {Promise<Array>} - A promise that resolves to an array of skin care records.
 */
async function getSkinCares(userId) {
  const records = await pb.collection('skinCares').getFullList({
    sort: '-created',
    expand: 'listes_produits(skinCare).produit',
    filter: `utilisateur = "${userId}"`,
  });
  return records;
}

async function addSkinCare(intituleSkinCare, idUtilisateur) {
  const record = await pb.collection('skinCares').create({
    intitule: intituleSkinCare,
    utilisateur: idUtilisateur,
  });

  return record;
}

async function getLastSkinCare(userId) {
  const record = await pb.collection('skinCares').getFirstListItem(`utilisateur = "${userId}"`, {
    sort: '-created',
  });

  return record;
}

module.exports = {
  getAllSkinCares,
  getLastSkinCare,
  getSkinCares,
  addSkinCare,
};
