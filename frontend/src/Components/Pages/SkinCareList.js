import { clearPage } from '../../utils/render';

const main = document.querySelector('main');

const Userlist = () => {
    const url = new URL(window.location.href);
    const userId = url.searchParams.get('userId');

    clearPage();
    listSkinCare(userId);
};

async function listSkinCare(userId){
    const response = await fetch(`http://localhost:3000/admin/skinCares?userId=${userId}`);
    const data = await response.json();

    data.forEach((skinCare) => {
        const test = skinCare.expand && skinCare.expand['listes_produits(skinCare)'].map((product) => `
            <div class="col">
                ${product.expand.produit.nom}
            </div>
        `).join('');

        main.innerHTML += `
            <div class="container container-skinCare">
                <div class="row">
                    <div class="col-3">
                        ${skinCare.intitule}
                    </div>
                    <div class="col container-product">
                    <div class="container">
                        <div class="row">
                            ${test}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
       `;

       
    });
}

export default Userlist;