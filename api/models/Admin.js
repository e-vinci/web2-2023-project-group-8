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

  const updatedRecords = records.map((record) => ({
    ...record,
    profileUrl: `${url}api/files/utilisateurs/${record.id}/${record.photo_profil}`,
  }));

  return updatedRecords;
}

module.exports = {
  getAllUser,
  getUserInformations,
};
