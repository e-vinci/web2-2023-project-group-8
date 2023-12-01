import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';

const formatFrenchDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric' };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('fr-FR', options);

    return `${formattedDate}`;
};

const main = document.querySelector('main');

const AdminPage = async () => {
    clearPage();
    listAllUser();
};

async function listAllUser() {
    const response = await fetch(`http://localhost:3000/admin/users`);
    const data = await response.json();

    main.innerHTML  += `
    <h1 class="text-center my-2 mb-5">Liste des utilisateurs</h1>
    <div class="content">
        <div class="container">
            <div class="table-responsive custom-table-responsive">
                <table class="custom-table">
                    <thead>
                        <tr>
                            <th scope="col">photo de profil</th>
                            <th scope="col">Username</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Prenom</th>
                            <th scope="col">email</th>
                            <th scope="col">Derniere connexion</th>
                            <th scope="col">Accès</th>
                            <th scope="col">SkinCare</th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
                    </tbody>
                </table>
            </div>
        </div>
    </div>`;

    const tbody = document.querySelector('#table-body');

    data.forEach((user) => {
        tbody.innerHTML += `
        <tr class="table-response test">
            <td class="td-spacing" style="text-align: center;">
                <img src="${user.profileUrl}" alt="user" class="avatar">
            </td>
            <td class="td-spacing">@${user.username}</td>
            <td class="td-spacing">${user.nom}</td>
            <td class="td-spacing">${user.prenom}</td>
            <td class="td-spacing">
                ${user.email}
            </td>
            <td class="td-spacing">${formatFrenchDate(user.derniere_connexion)}</td>
            <td class="td-spacing">${user.verified ? 'Administrateur' : 'Utilisateur'}</td>
            <td class="td-spacing">
                <div class="dropdown">
                    <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Voir Plus
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" id="btn-skincare" data-user-id="${user.id}">Skincares</a></li>
                    </ul>
                </div>
            </td>
            
        </tr>
        `;
    });

    const buttons = document.querySelectorAll('#btn-skincare');
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const userId = event.target.getAttribute('data-user-id');
            sessionStorage.setItem('userId',userId);

            Navigate(`/user/SkinCareList`);
        });
    });
}

export default AdminPage;
