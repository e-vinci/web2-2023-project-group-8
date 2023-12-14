// import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

const main = document.querySelector('main');

const ResultsPage = () => {
    if (localStorage.getItem('connected') === 'true') {
        Navigate('/results');
    }else{
        diagnosis();
    }
};

function diagnosis() {
    main.innerHTML = `<h1>Voici votre diagnostique</h1>`;
    // Build HTML content for all products
    const productsHTML = JSON.parse(localStorage.getItem('savdProducts')).map((product) => `
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${product.photo}" class="card-img py-1 px-1 img-fluid" alt="${product.nom}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${product.nom}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${product.contenance} ${product.unite_contenance}</h6>
                        <strong>Description: </strong>
                        <div class="card-text" style="min-height: 200px;">
                            ${product.description}
                        </div>
                        <h6 class="card-subtitle mb-2 text-muted">${product.prix} €</h6>
                        <button type="button" class="btn btn-lg mx-auto btn-product">voir le produit</button>
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

};

export default ResultsPage;
