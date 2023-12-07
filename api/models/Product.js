// eslint-disable-next-line import/no-unresolved
const PocketBase = require('pocketbase/cjs');

const url = 'https://ylann-mommens.pockethost.io/';
const pb = new PocketBase(url);

async function getProductById(productId) {
  const record = await pb.collection('produits').getOne(productId);
  record.photo = `${url}api/files/produits/${productId}/${record.photo}`;
  return record;
}

/**
 * Add a product to a skin care
 * @param {*} skinCareId The id of the skin care
 * @param {*} productId The id of the product
 * @returns {Promise<Object>} - A promise that resolves to the created record.
*/
async function addProductIntoListesProduits(skinCareId, productId) {
  const record = await pb.collection('listes_produits').create({
    skinCare: skinCareId,
    produit: productId,
  });

  return record;
}

module.exports = {
  getProductById,
  addProductIntoListesProduits,
};
