const Userlist = () => {
    listSkinCare ();
};

function listSkinCare(){
    fetch(`http://localhost:3000/users/skinCare`)
    .then((response) => response.json())
}

export default Userlist;