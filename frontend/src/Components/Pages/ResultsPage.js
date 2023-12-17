import { showLoader } from '../../utils/render';

const main = document.querySelector('main');
const body = document.querySelector('body');
body.style.overflow = 'auto';

const ResultsPage = () => {
    showLoader();
    results();
};

async function results() {
    console.log(sessionStorage.getItem('userId'));

    const listSkinCareResponse = await fetch(`http://localhost:3000/admin/skinCares?userId=${sessionStorage.getItem('userId')}`);
    const data = await listSkinCareResponse.json();

    const morningRoutine = data.filter((skinCare) => skinCare.type === "matin");
    const nightRoutine = data.filter((skinCare) => skinCare.type === "soir"); 
    const morningRoutineLayout = generateRoutineLayout(morningRoutine);
    const nightRoutineLayout = generateRoutineLayout(nightRoutine);

    const userResponse = await fetch(`http://localhost:3000/admin/users?userId=${sessionStorage.getItem('userId')}`);
    const userData = await userResponse.json();
    const userFound = userData[0];

    const resultsLayout = `
    <section>
    <div id="results">
    <span class="ms-auto"><span class="badge bg-secondary">Date</span></span>
    <h2>Voici vos résultats, ${userFound.prenom}</h2>
        <div class="skin-info">
            <p><strong>Type de peau :</strong> grasse</p>
            <p><strong>Problèmes ciblés :</strong></p>
            <ul class="skin-issues">
                <li>Problème 1</li>
                <li>Problème 2</li>
            </ul>
        </div>
        <div class="routine">
            <h3>Routine AM</h3>
            <div class="row">
                ${morningRoutineLayout}
            </div>
        </div>
        <div class="routine">
            <h3>Routine PM</h3>
            <div class="row">
                ${nightRoutineLayout}
            </div>
        </div>
    </div>
    </section>
    `;
    main.innerHTML = resultsLayout;
};

function generateRoutineLayout(routine) {
    
    return routine.map((skinCare) => {
        const routineLayout = skinCare.expand && skinCare.expand['listes_produits(skinCare)'].map((product) => {
            // const imageUrl = product.expand.produit.photo; // Add background picture
            const routineItem = `
                <div class="col-sm d-flex">
                    <div class="card flex-grow-1 d-flex flex-column">
                        <div class="card-body">
                            <h5 class="card-title">${product.expand.produit.nom}</h5>
                            <h5 class="card-title">${product.expand.produit.marque.nom}</h5>
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
            `;
            return routineItem;
        }).join('');
        return routineLayout || 'Aucune routine'; 
    }).join('');
}

export default ResultsPage;