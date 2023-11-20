
const SimilarProductsPage = () => {
    const similarPage = `
        <section class="similar-products">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h2>Similar Products</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="product-image-wrapper">
                            <div class="single-products">
                                <div class="productinfo text-center">
                                    <img src="../../img/product-details/similar1.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Product Name</p>
                                    <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                                    <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-heart"></i>Add to wishlist</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="product-image-wrapper">
                            <div class="single-products">
                                <div class="productinfo text-center">
                                    <img src="../../img/product-details/similar2.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Product Name</p>
                                    <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                                    <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-heart"></i>Add to wishlist</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="product-image-wrapper">
                            <div class="single-products">
                                <div class="productinfo text-center">
                                    <img src="../../img/product-details/similar3.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Product Name</p
        </section>
        `
    const main = document.querySelector('main');
    main.innerHTML = similarPage;
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
};

export default SimilarProductsPage;