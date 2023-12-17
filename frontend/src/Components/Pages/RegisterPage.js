import Navigate from "../Router/Navigate";

const main = document.querySelector('main');
const body = document.querySelector('body');
const mailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let successRegister = false;

const RegisterPage = () => {
    main.innerHTML = `
    <section class="h-100 gradient-form" style="background-color: #eee;">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Créer un compte</h2>

              <form id="registerForm">

                <div class="form-outline mb-4">
                  <input type="text" id="formNom" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example1cg">Nom</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="formPrenom" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example1cg">Prénom</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="formUsername" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example1cg">Nom d'utilisateur</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="formEmail" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example3cg">Adresse mail</label>
                </div>

                <input class="form-control form-control-lg" id="formPicture" type="file" />
                <div class="small text-muted mt-2">Choisissez une photo de profil. Ce champ est optionnel.</div>

                <div class="form-outline mb-4">
                  <input type="password" id="formPassword" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cg">Mot de passe</label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="button" id="registerBtn"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">S'inscrire</button>
                </div>
                <br>
                <span id="error" class="text-danger"></span>

                <p class="text-center text-muted mt-5 mb-0">Vous avez déjà un compte ? <a href="/login"
                    class="fw-bold text-body"><u>Connectez-vous ici</u></a></p>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
body.style.overflow = 'auto';
const username = document.getElementById('formUsername');
const password = document.getElementById('formPassword');
const email = document.getElementById('formEmail');
const nom = document.getElementById('formNom');
const prenom = document.getElementById('formPrenom');
const photo = document.getElementById('formPicture');
const registerBtn = document.getElementById('registerBtn');

registerBtn.addEventListener('click', () => {
  if (password.value.length < 8) {
    sendErrorPassword();
  } else if (username.value === '' || password.value === '' || email.value === '' || nom.value === '' || prenom.value === '') {
    sendErrorEmptyField();
  } else if (!email.value.match(mailPattern)) {
    sendErrorEmail();
  } else {
  registerUser(username.value, password.value, email.value, nom.value, prenom.value, photo.value);
  if(successRegister){
    Navigate('/login');
  }
  else{
    // eslint-disable-next-line no-alert
    alert('Erreur lors de l\'inscription');
  }
}
});
};

function registerUser(userName, passwd, userEmail, lastname, firstname, photo) {
  try{
    fetch('http://localhost:3000/auths/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: userName,
      password: passwd, 
      email: userEmail, 
      nom: lastname, 
      prenom: firstname,
      photo,
    }),
  }).then((res) => res.json());
  successRegister = true;
  } catch (error) {
    // eslint-disable-next-line no-template-curly-in-string
    throw new Error('Error in registerUser: ${error}');
  }
}

function sendErrorEmptyField() {
  const error = document.getElementById('error');
  error.innerHTML = 'Veuillez remplir tous les champs';
}

function sendErrorPassword() {
  const error = document.getElementById('error');
  error.innerHTML = 'Le mot de passe doit contenir au moins 8 caractères ';
}

function sendErrorEmail() {
  const error = document.getElementById('error');
  error.innerHTML = 'Veuillez entrer une adresse mail valide';
}

export default RegisterPage;