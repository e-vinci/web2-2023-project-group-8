import { clearPage } from '../../utils/render';

const main = document.querySelector('main');
const ResultsPage = () => {
    clearPage();
    results();
};

async function results() {

    // const listSkinCareResponse = await fetch(`http://localhost:3000/admin/skinCares?userId=${sessionStorage.getItem('userId')}`);
    // const data = await listSkinCareResponse.json();

    // const userResponse = await fetch(`http://localhost:3000/admin/users?userId=${sessionStorage.getItem('userId')}`);
    // const userData = await userResponse.json();

    /* data.forEach((skinCare) => {
        const test = skinCare.expand && skinCare.expand['listes_produits(skinCare)'].map((product) => `
            <div class="col-sm d-flex">
                <div class="card flex-grow-1 d-flex flex-column">
                    <div class="card-body">
                        <h5 class="card-title">${product.expand.produit.nom}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${product.expand.produit.contenance} ${product.expand.produit.unite_contenance}</h6>
                        <strong>Description: </strong>
                        <p class="card-text">
                            ${product.expand.produit.description}
                        </p>
                        <h6 class="card-subtitle mb-2 text-muted">${product.expand.produit.prix} €</h6>
                        <button type="button" class="btn btn-lg btn-product" data-product-id="${product.expand.produit.id}">voir le produit</button>
                    </div>
                </div>
            </div>
        `).join('');
        */
    
    const productLayout = `
    <div class="col-sm d-flex">
                <div class="card flex-grow-1 d-flex flex-column">
                    <div class="card-body">
                        <h5 class="card-title">[Nom Produit]</h5>
                        <h6 class="card-subtitle mb-2 text-muted">[Contenance] [Unité]</h6>
                        <strong>Description: </strong>
                        <p class="card-text">
                            [Description]
                        </p>
                        <h6 class="card-subtitle mb-2 text-muted">[Prix] €</h6>
                        <button type="button" class="btn btn-lg btn-product" data-product-id="">voir le produit</button>
                    </div>
                </div>
            </div>
    `;

    const resultsLayout = `
    <section>
    <div id="results">
    <span class="ms-auto"><span class="badge bg-secondary">Date</span></span>
    <h2>Voici vos résultats, [Prénom]</h2>
        <div class="skin-info">
            <p><strong>Type de peau :</strong> grasse</p>
            <p><strong>Problèmes ciblés :</strong></p>
            <ul class="skin-issues">
                <li>Problème 1</li>
                <li>Problème 2</li>
                <!-- Ajoutez autant de problèmes ciblés que nécessaire -->
            </ul>
            </div>
            <div class="routine">
            <h3>Routine AM</h3>
            <div class="row">
                ${productLayout}
                ${productLayout}
                ${productLayout}
            </div>
            </div>
            <div class="routine">
            <h3>Routine PM</h3>
            <p>Description de la routine du soir...</p>
            <div class="row">
                ${productLayout}
                ${productLayout}
                ${productLayout}
            </div>
        </div>
    </div>
    </section>
    `;

        main.innerHTML = resultsLayout;

};
export default ResultsPage;