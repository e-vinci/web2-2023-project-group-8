/* eslint-disable no-plusplus */
import { clearPage,formatDate } from '../../utils/render';
import Navigate from '../Router/Navigate';

const main = document.querySelector('main');

const Userlist = () => {
    const url = new URL(window.location.href);
    const userId = url.searchParams.get('userId');

    clearPage();
    listSkinCare(userId);
};

async function listSkinCare(userId){
    let accordionCounter = 1; // Variable compteur pour générer des ID uniques

    const listSkinCareResponse = await fetch(`http://localhost:3000/admin/skinCares?userId=${userId}`);
    const data = await listSkinCareResponse.json();

    const userResponse = await fetch(`http://localhost:3000/admin/users?userId=${userId}`);
    const userData = await userResponse.json();
    const userFound = userData[0];

    main.innerHTML += `<h1 class="text-center my-2 mb-5">Historique des skincare de <p class= "text-uppercase">${userFound.prenom} ${userFound.nom}</p></h1>`;


    data.forEach((skinCare) => {
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
                        <button type="button" class="btn btn-lg" id="btn-product">voir le produit</button>
                    </div>
                </div>
            </div>
        `).join('');

        main.innerHTML += `
        <section class="section mx-5">
            <div class="accordion" id="accordionPanelsStayOpenExample${accordionCounter}">
                <div class="accordion-item my-3">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne${accordionCounter}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne${accordionCounter}" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne${accordionCounter}">
                            <span class="me-auto">${skinCare.intitule}</span>
                            <span class="ms-auto">Date de création <span class="badge bg-secondary">${formatDate(skinCare.created)}</span></span>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne${accordionCounter}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne${accordionCounter}">
                        <div class="accordion-body">
                            <div class="container">
                                <div class="row">
                                    ${test}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       `;
       ++accordionCounter;
    });

    const button = document.querySelector('#btn-product');
        button.addEventListener('click', () => {
        Navigate('/products');
    }); 
}

export default Userlist;