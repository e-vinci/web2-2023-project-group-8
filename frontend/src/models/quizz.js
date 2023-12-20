/**
 *  Adds a product to the routine of the connected user
 * @param {*} productIdentification Product ID
 * @param {*} skinCareIdentification SkinCare ID
 * @throws {Error} - Error if the request fails
 */
async function addToConnected(productIdentification, skinCareIdentification) {
  try {
    // Envoie le productID au backend
    const response = await fetch('http://localhost:3000/quizz/addProductToSkinCare', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: productIdentification,
        skinCareId: skinCareIdentification,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to add product to skincare');
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error in addToConnected: ${error}`);
  }
}

/**
 *  Adds a skincare routine to the connected user
 * @param { } skinCareName  Name of the skincare routine
 * @param {*} userId  User ID
 */
async function addSkinCare(skinCareName, userId) {
  try {
    const response = await fetch('http://localhost:3000/user/skinCare/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        intitule: skinCareName,
        idUtilisateur: userId,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to add skincare routine');
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error in addSkinCare: ${error}`);
  }
}

/**
 * Gets the last skincare routine ID of the connected user
 * @param {*} userId User ID
 * @returns {Promise} Promise object represents the last skincare routine ID
 */
async function getLastSkinCareId(userId) {
  try {
    const listSkinCareResponse = await fetch(
      `http://localhost:3000/user/skinCares/last?userId=${userId}`,
    );
    if (!listSkinCareResponse.ok) {
      throw new Error('Failed to get last skincare routine ID');
    }

    const data = await listSkinCareResponse.json();
    return data.id;
  } catch (error) {
    throw new Error(`Error in getLastSkinCareId: ${error}`);
  }
}

async function getProducts(productID) {
  const getProduct = await fetch(`http://localhost:3000/products/${productID}`);
  const data = await getProduct.json();
  return data;
}

module.exports = { addToConnected, addSkinCare, getLastSkinCareId, getProducts };
