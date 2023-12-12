// eslint-disable-next-line import/no-unresolved
const PocketBase = require('pocketbase/cjs');

const url = 'https://ylann-mommens.pockethost.io/';
const pb = new PocketBase(url);

// globally disable auto cancellation
pb.autoCancellation(false);

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
async function addProductIntoListesProduitsWithSkinCare(skinCareId, productId) {
  const record = await pb.collection('listes_produits').create({
    skinCare: skinCareId,
    produit: productId,
  });

  return record;
}

async function getCommentsByProductId(productId) {
  const records = await pb.collection('commentaires').getFullList({
    filter: `field = "${productId}"`,
  });
  return records;
}

module.exports = {
  getProductById,
  getCommentsByProductId,
  addProductIntoListesProduitsWithSkinCare,
};
