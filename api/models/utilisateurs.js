// eslint-disable-next-line import/no-unresolved
const PocketBase = require('pocketbase/cjs');

const pb = new PocketBase('https://ylann-mommens.pockethost.io');

async function getAllUser() {
  const records = await pb.collection('utilisateurs').getFullList({
    sort: '-created',
  });

  // console.log(records);
  return records;
}

module.exports = {
  getAllUser,
};
