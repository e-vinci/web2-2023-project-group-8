let productsList = [];

function pushProduct(product) {
  productsList.push(product);
}

function popProduct() {
    productsList.pop();
}

function getProductsList() {
    return productsList;
}

function cleanProductsList() {
  productsList = [];
}

module.exports = {
    pushProduct,
    popProduct,
    getProductsList,
    cleanProductsList
};


