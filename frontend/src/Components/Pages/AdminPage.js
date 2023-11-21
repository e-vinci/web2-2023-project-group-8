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
    const response = await fetch(`http://localhost:3000/users`);
    const data = await response.json();

    main.innerHTML  += `
    <table class="table">
        <thead>
        <tr>
            <th></th>
            <th></th>
            <th>Username</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Inscription</th>
            <th>Derniere connexion</th>
            <th>Droit</th>
            <th>Nombre de Routine</th>
        </tr>
        </thead>
        <tbody id="table-body">
        </tbody>
    </table>`;
    
    const tbody = document.querySelector('#table-body');
    
    data.forEach((user) => {
        tbody.innerHTML += `
        <tr>
            <td> <input type="checkbox" class="table-row"></td>
            <td>
                <img src="${user.imageUrl}/${user.id}/${user.photo_profil}" alt="user" class="avatar">
            </td>
            <td id="user-info" data-user-id="${user.id}">@${user.username}</td>
            <td>${user.nom}</td>
            <td>${user.prenom}</td>
            <td>${formatFrenchDate(user.created)}</td>
            <td>${formatFrenchDate(user.derniere_connexion)}</td>
            <td>${user.verified ? 'Administrateur' : 'Utilisateur'}</td>
            <td></td>
        </tr>
        `;
    });
    
    const username = document.querySelector('#user-info');
    username.addEventListener('click', (event) => {
        const {userId} = event.target.dataset;
        Navigate(`/user/SkinCareList?userId=${userId}`);
    }); 
}

export default AdminPage;
