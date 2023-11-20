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
    const url = 'https://ylann-mommens.pockethost.io/'
     const imageUrl = `${url}api/files/utilisateurs`;
    fetch(`http://localhost:3000/users`)
    .then((response) => response.json())
    .then((data) => {
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
                    <img src="${imageUrl}/${user.id}/${user.photo_profil}" alt="user" class="avatar">
                </td>
                <td id="user-info">@${user.username}</td>
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

export default AdminPage;
