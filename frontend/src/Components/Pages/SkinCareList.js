const main = document.querySelector('main');

const Userlist = () => {
    const url = new URL(window.location.href);
    const userId = url.searchParams.get('userId');

    listSkinCare(userId);
};

async function listSkinCare(userId){
    const response = await fetch(`http://localhost:3000/users/skinCare?userId=${userId}`);
    const data = await response.json();

    data.forEach((skinCare) => {
        main.innerHTML += `${skinCare.intitule}`;
    });
}

export default Userlist;