// eslint-disable-next-line import/no-unresolved
const PocketBase = require('pocketbase/cjs');

const url = 'https://ylann-mommens.pockethost.io/';
const pb = new PocketBase(url);

async function getAllUser() {
  const records = await pb.collection('utilisateurs').getFullList({
    sort: '-created',
  });

  // Add a new field to each record
  const updatedRecords = records.map((record) => ({
    ...record,
    imageUrl: `${url}api/files/utilisateurs`,
  }));

  // console.log(updatedRecords);
  return updatedRecords;
}

/**
 * Retrieves all skin care records for a given user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Array>} - A promise that resolves to an array of skin care records.
 */
async function getAllSkinCare(userId) {
  const records = await pb.collection('skinCares').getFullList({
    expand: 'listes_produits(skinCare).produit',
    filter: `utilisateur = "${userId}"`,
  });

  // console.log(records);
  return records;
}

module.exports = {
  getAllUser,
  getAllSkinCare,
};
