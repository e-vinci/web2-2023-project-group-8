// import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';
import { getProductsList } from '../../models/quizzData';

const main = document.querySelector('main');

const DiagnosisPage = () => {
        diagnosis();
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
};

function diagnosis() {
    main.innerHTML = `<h1>Voici votre diagnostique</h1>
    <br>
    <h5 class="container">Différentes étapes à suivre pour une bonne routine </h5><br>
    <h6 class="container">1) <mark>Le démaquillage:</mark> Si vous portez du maquillage il faut bien évidemment commencer par vous démaquiller. </h6><br>
    <h6 class="container">2) <mark>Le nettoyage:</mark> Il faut toujours commencer par se nettoyer le visage que ça soit pour retirer les impurtées du quotidien ou </h6>;
    <h6 class="container">2) <mark>Les soins:</mark> Peu importe le nombre de produits que vous souhaitez appliquer, il faut toujours commencer du plus liquide au plus épais. </h6>`;
    // Build HTML content for all products
    const productsHTML = getProductsList().map((product) => `
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

export default DiagnosisPage;