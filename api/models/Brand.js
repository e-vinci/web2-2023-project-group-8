// eslint-disable-next-line import/no-unresolved
const PocketBase = require('pocketbase/cjs');

const url = 'https://ylann-mommens.pockethost.io/';
const pb = new PocketBase(url);

// globally disable auto cancellation
pb.autoCancellation(false);

/**
 * get list of Brands
*/
async function getBrandsList() {
  const records = await pb.collection('marques').getFullList({
    fields: ['nom'],
    order: 'asc',
  });
  return records;
}

async function getBrandNameById(brandId) {
  const record = await pb.collection('marques').getOne(brandId);
  return record;
}

module.exports = {
  getBrandsList,
  getBrandNameById,
};
