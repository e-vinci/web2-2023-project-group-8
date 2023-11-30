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
    profileUrl: `${url}api/files/utilisateurs/${record.id}/${record.photo_profil}`,
  }));

  // console.log(updatedRecords);
  return updatedRecords;
}

async function getUserInformations(userId) {
  const records = await pb.collection('utilisateurs').getFullList({
    filter: `id = "${userId}"`,
  });

  // Add a new field to the record
  const updatedRecords = records.map((record) => ({
    ...record,
    profileUrl: `${url}api/files/utilisateurs/${record.id}/${record.photo_profil}`,
  }));

  // console.log(records);
  return updatedRecords;
}

/**
 * Retrieves all skin care records for a given user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Array>} - A promise that resolves to an array of skin care records.
 */
async function getAllSkinCare(userId) {
  const records = await pb.collection('skinCares').getFullList({
    sort: '-created',
    expand: 'listes_produits(skinCare).produit',
    filter: `utilisateur = "${userId}"`,
  });

  // console.log(records);
  return records;
}

module.exports = {
  getAllUser,
  getAllSkinCare,
  getUserInformations,
};
