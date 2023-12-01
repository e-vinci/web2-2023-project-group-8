// eslint-disable-next-line import/no-unresolved
const PocketBase = require('pocketbase/cjs');

const url = 'https://ylann-mommens.pockethost.io/';
const pb = new PocketBase(url);

async function getProductById(productId) {
  const record = await pb.collection('produits').getOne(productId);
  record.photo = `${url}api/files/produits/${productId}/${record.photo}`;
  return record;
}

module.exports = {
  getProductById,
};
