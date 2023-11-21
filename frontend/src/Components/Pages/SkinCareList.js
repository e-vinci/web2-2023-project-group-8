const main = document.querySelector('main');

const Userlist = () => {
    const url = new URL(window.location.href);
    const userId = url.searchParams.get('userId');

    main.innerHTML = '';
    listSkinCare(userId);
};

async function listSkinCare(userId){
    const response = await fetch(`http://localhost:3000/admin/skinCares?userId=${userId}`);
    const data = await response.json();

    data.forEach((skinCare) => {
        main.innerHTML += `${skinCare.intitule}`;
    });
}

export default Userlist;