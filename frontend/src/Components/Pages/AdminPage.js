import Navigate from '../Router/Navigate';

const formatFrenchDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric' };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('fr-FR', options);

    return `${formattedDate}`;
};

const main = document.querySelector('main');

const AdminPage = async () => {
    listAllUser();
};

async function listAllUser() {
    const response = await fetch(`http://localhost:3000/admin/users`);
    const data = await response.json();

    main.innerHTML  += `
    <div class="content">
        <div class="container">
            <div class="table-responsive custom-table-responsive">
                <table class="custom-table">
                    <thead>
                        <tr>
                            <th scope="col">
                                <label class="control control--checkbox">
                                <input type="checkbox"/>
                                <div class="control__indicator"></div>
                                </label>
                            </th>
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
            <td class="td-spacing" scope="row">
                <input type="checkbox"/>
            </td>
            <td class="td-spacing" style="text-align: center;">
                <img src="${user.profileUrl}" alt="user" class="avatar">
            </td>
            <td class="td-spacing">@${user.username}</td>
            <td class="td-spacing">${user.nom}</td>
            <td class="td-spacing">${user.prenom}</td>
            <td class="td-spacing">
                ${user.email}
                <small class="d-block">Date de création ${formatFrenchDate(user.created)}</small>
            </td>
            <td class="td-spacing">${formatFrenchDate(user.derniere_connexion)}</td>
            <td class="td-spacing">${user.verified ? 'Administrateur' : 'Utilisateur'}</td>
            <td class="td-spacing">
                <button type="button" class="btn btn-lg" data-user-id="${user.id}">voir</button>
            </td>
            
        </tr>
        `;
    });

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const userId = event.target.getAttribute('data-user-id');
            Navigate(`/user/SkinCareList?userId=${userId}`);
        });
    });
}

export default AdminPage;
