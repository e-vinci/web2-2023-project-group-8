import Navigate from '../Router/Navigate';
import { formatDate, showLoader } from '../../utils/render';

const main = document.querySelector('main');

const AdminPage = async () => {
    showLoader();
    listAllUser();
};

async function listAllUser() {
    const response = await fetch(`http://localhost:3000/admin/users`);
    const data = await response.json();

    main.innerHTML  = `
    <h1 class="text-center my-2 mb-5">Liste des utilisateurs</h1>
    <div class="custom-table-responsive">
        <div class="list-group">
            <div class="list-group-item list-group-item-primary">
                <div class="row align-items-start">
                    <div class="col"></div>
                    <div class="col">Username</div>
                    <div class="col">Nom</div>
                    <div class="col">Prenom</div>
                    <div class="col-2">Email</div>
                    <div class="col">Derniere connexion</div>
                    <div class="col">Accès</div>
                    <div class="col"></div>
                </div>
            </div>
        </div>  
    </div>
    `;

    const contenu = document.querySelector('.list-group');

    data.forEach((user) => {
        contenu.innerHTML += `
        <ul class="list-group-item list-group-item-action" aria-current="true">
            <li class="row align-items-start">
                <div class="col text-center avatar">
                    <img src="${user.profileUrl}" alt="user" class="avatar">
                </div>
                <div class="col">@${user.username}</div>
                <div class="col">${user.nom}</div>
                <div class="col">${user.prenom}</div>
                <div class="col-2">${user.email}</div>
                <div class="col">${formatDate(user.updated)}</div>
                <div class="col">${user.verified ? 'Administrateur' : 'Utilisateur'}</div>
                <div class="col dropdown">
                    <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Voir Plus
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" id="btn-skincare" data-user-id="${user.id}">Liste Skincares</a></li>
                    </ul>
                </div>
            </li>
        </ul>
        `;
    });

    const buttons = document.querySelectorAll('#btn-skincare');
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const userId = event.target.getAttribute('data-user-id');
            sessionStorage.setItem('userId',userId);

            Navigate(`/user/SkinCareList?userId=${userId}`);
        });
    });
}

export default AdminPage;
