// eslint-disable-next-line import/no-extraneous-dependencies
import PocketBase from 'pocketbase';

const formatFrenchDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric' };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('fr-FR', options);

    return `${formattedDate}`;
};
// const routineCounter = (userId) => {};

const AdminPage = async () => {
    const url = 'https://ylann-mommens.pockethost.io/'
    const imageUrl = `${url}api/files/utilisateurs`;

    const pb = new PocketBase(url);

    const userRecords = await pb.collection('utilisateurs').getFullList({
      sort: '-created',
    });

    const rows = userRecords.map(user => `
        <tr>
            <td> <input type="checkbox" class="table-row"></td>
            <td>
                <img id="image" src="${imageUrl}/${user.id}/${user.photo_profil}" ></img>
            <td><a href="#">@${user.username}</a></td>
            <td>${user.nom}</td>
            <td>${user.prenom}</td>
            <td>${formatFrenchDate(user.created)}</td>
            <td>${formatFrenchDate(user.derniere_connexion)}</td>
            <td>${user.is_admin ? 'Administrateur' : 'Utilisateur'}</td>
            <td>${user.nombre_de_routine}</td>
        </tr>
    `);
    // Affichage de la page Admin
    const adminPage = `
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
            <tbody>
                ${rows}
            </tbody>
        </table>`;

    const main = document.querySelector('main');
    main.innerHTML = adminPage;
};

export default AdminPage;
