// import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

const main = document.querySelector('main');

const ResultsPage = () => {
    if (localStorage.getItem('connected') === 'true') {
        Navigate('/results');
    }else{
        diagnosis();
    }
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
};

function diagnosis() {
    main.innerHTML = `<h1>Voici votre diagnostique</h1>`;
    // Build HTML content for all products
    const productsHTML = JSON.parse(localStorage.getItem('savdProducts')).map((product) => `
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-3 d-flex align-items-center">
                    <div class="container-fluid text-center">
                        <img src="${product.photo}" class="card-img py-1 px-1 product-image" alt="${product.nom}">
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h5 class="card-title">${product.nom}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${product.contenance} ${product.unite_contenance}</h6>
                        <strong>Description: </strong>
                        <div class="card-text">
                            ${product.description}
                        </div>
                        <h6 class="card-subtitle mb-2 text-muted">${product.prix} €</h6>
                        <button type="button" class="btn btn-lg mt-3 btn-product" data-product-id="${product.id}">voir le produit</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Update main.innerHTML with the entire HTML content
    main.innerHTML += `
        <section class="custom-table-responsive my-3 px-4 ">
            <div class="row">
                ${productsHTML}
            </div>
        </section>
    `;

    const buttons = document.querySelectorAll('.btn-product')
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const productId = event.target.getAttribute('data-product-id');
            Navigate(`/products?productId=${productId}`);
        });
    });
};

export default ResultsPage;