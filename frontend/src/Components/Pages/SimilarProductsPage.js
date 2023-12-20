import Navigate from '../Router/Navigate';
import { showLoader } from '../../utils/render';


const SimilarProductsPage = async () => {
    showLoader();
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');

    const data = await (await fetch(`http://localhost:3000/products/similar/${productId}`)).json();

    const productsHtml = data.map((product) => `
            <div class="col-sm d-flex">
                <div class="card flex-grow-1 d-flex flex-column">
                    <div class="card-body">
                        <h5 class="card-title">${product.nom}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${product.contenance} ${product.unite_contenance}</h6>
                        <strong>Description: </strong>
                        <p class="card-text">
                            ${product.description}
                        </p>
                        <h6 class="card-subtitle mb-2 text-muted">${product.prix} €</h6>
                        <button type="button" class="btn btn-lg btn-product" data-product-id="${product.id}">voir le produit</button>
                    </div>
                </div>
            </div>
        `).join('');
    
    const main = document.querySelector('main');
    main.innerHTML = productsHtml;
    const body = document.querySelector('body');
    body.style.overflow = 'auto';

    const buttons = document.querySelectorAll('.btn-product')
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-product-id');
            Navigate(`/products?productId=${id}`);
        });
    });
    };

export default SimilarProductsPage;