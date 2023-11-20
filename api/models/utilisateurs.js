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

// Renvoie tous les skinCares ainsi que les produits associés
async function getAllSkinCare(userId) {
  try {
    const records = await pb.collection('skinCares').getFullList({
      expand: 'listes_produits(skinCare).produit',
      filter: `utilisateur = "${userId}"`,
    });

    console.log(records);
    return records;
  } catch (error) {
    console.error('Erreur lors de la récupération des skinCares :', error);
    throw error;
  }
}

module.exports = {
  getAllUser,
  getAllSkinCare,
};
