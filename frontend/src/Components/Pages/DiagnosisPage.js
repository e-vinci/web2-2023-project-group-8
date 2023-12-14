// import { clearPage } from '../../utils/render';

const main = document.querySelector('main');

const ResultsPage = () => {
    if (localStorage.getItem('connected')) {
        results();
    }
};

function results() {
    main.innerHTML = `<h1>Results</h1>`;

    let a = 1;
    a+=1;
    // Build HTML content for all products
    const productsHTML = JSON.parse(localStorage.getItem('savdProducts')).map((product) => `
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
                    <button type="button" class="btn btn-lg btn-product">voir le produit</button>
                </div>
            </div>
        </div>`
    ).join('');

    // Update main.innerHTML with the entire HTML content
    main.innerHTML += `
        <section>
            <div id="results">
                <span class="ms-auto"><span class="badge bg-secondary">Date</span>
                <h2>Voici vos résultats, ${a}</h2>
                    <div class="skin-info">
                <p><strong>Type de peau :</strong> grasse</p>
                <p><strong>Problèmes ciblés :</strong></p>
                <div class="routine">
                    <div class="row">
                        ${productsHTML}
                    </div>
                </div>
            </div>
        </section>`;
};

export default ResultsPage;
