// eslint-disable-next-line import/no-extraneous-dependencies


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

function listAllUser() {
    fetch(`http://localhost:3000/users`)
    .then((response) => response.json())
    .then((data) => {
        const users = getUsers(data);
        main.innerHTML  += `
        <table class="table">
          <thead>
            <tr>
              <th><input type="checkbox" class="table-row"></th>
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
        
        users.forEach((user) => {
            tbody.innerHTML += `
            <tr>
                <td> <input type="checkbox" class="table-row"></td>
                <td>
                    <p></p>
                </td>
                <td><a href="#">@${user.username}</a></td>
                <td>${user.nom}</td>
                <td>${user.prenom}</td>
                <td>${formatFrenchDate(user.created)}</td>
                <td>${formatFrenchDate(user.derniere_connexion)}</td>
                <td>${user.verified ? 'Administrateur' : 'Utilisateur'}</td>
                <td></td>
            </tr>
            `;
        });
    });
}

function getUsers(data) {
    return data.items;
}

export default AdminPage;
