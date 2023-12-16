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

/**
 * Get the comments of a product
 * @param {*} productId The id of the product
 * @returns {Promise<Object>} - A promise that resolves to the created record.
 */
async function getCommentsByProductId(productId) {
  const records = await pb.collection('commentaires').getFullList({
    filter: `produit = "${productId}"`,
    expand: 'user',
  });
  return records;
}

/* POST add comment to product. */
async function addCommentToProduct(productId, userId, comment, numStars) {
  const record = await pb.collection('commentaires').create({
    produit: productId,
    user: userId,
    comment,
    stars: numStars,
  });

  return record;
}

/** TODO
 * POST add product into the website (admin)
 * @param {*} n The name of the product
 * @param {*} m The brand of the product
 * @param {*} caract The caracteristics of the product
 * @param {*} ingr The ingredients of the product
 * @param {*} cont The contenance of the product
 * @param {*} uniteCont The contenance unit of the product
 * @param {*} description The description of the product
 * @returns {Promise<Object>} - A promise that resolves to the created record.
*/
async function addNewProduct(n, m, p, caract, ingr, cont, uniteCont, description) {
  const record = await pb.collection('produits').create({
    nom: n,
    marque: m,
    prix: p,
    caracteristique: caract,
    ingredients: ingr,
    contenance: cont,
    unite_contenance: uniteCont,
    description,
  });

  return record;
}

async function getAllProductsByTypes(productId) {
  const records = await pb.collection('produits').getFullList({
    filter: `id != "${productId}"`,
  });
  const productTarget = await getProductById(productId);
  const productTypes = productTarget.caracteristique;
  const products = [];
  records.forEach((product) => {
    let isSameType = true;
    productTypes.forEach((type) => {
      if (!product.caracteristique.includes(type)) {
        isSameType = false;
      }
    });
    if (isSameType) {
      products.push(product);
    }
  });
  return products;
}

module.exports = {
  getProductById,
  getCommentsByProductId,
  addProductIntoListesProduitsWithSkinCare,
  addCommentToProduct,
  addNewProduct,
  getAllProductsByTypes,
};
