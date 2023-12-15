import logoImage from '../../img/icon.png';
import Navigate from '../Router/Navigate';

const main = document.querySelector('main');
const body = document.querySelector('body');

const LoginPage = () => {
  main.innerHTML = `
  
        <section class="h-100 gradient-form" style="background-color: #eee;">
        <div class="login-container">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center">
                  <img src="${logoImage}"
                    style="width: 185px;" alt="logo">
                    <br>
                    <br>
                    <br>
                </div>

                <form id="loginForm">
                  <p>Connectez-vous</p>
                  <br>

                  <div class="form-outline mb-4">
                    <input type="username" id="form2Example11" class="form-control"
                      placeholder="Nom d'utilisateur" />
                    <label class="form-label" for="form2Example11">Nom d'utilisateur</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control" />
                    <label class="form-label" for="form2Example22">Mot de passe</label>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button id="loginBtn" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Se connecter
                      </button>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Pas encore de compte ?</p>
                    <a href="/register">
                    <button type="button" class="btn btn-outline-danger">Créer un compte</button>
                    </a>
                  </div>

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2 loginhalf">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4 align-middle">Le saviez-vous ?</h4>
                <p class="small mb-0">En créant un compte utilisateur sur Izyskin, vous aurez désormais accès a tous
                 vos diagnostiques et vos recommandations de produits passés.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        `;
  body.style.overflow = 'auto';

async function handleLogin() {
  const username = document.querySelector('#form2Example11').value;
  const password = document.querySelector('#form2Example22').value;

  await fetch('http://localhost:3000/loginfunc', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        localStorage.setItem('token', data.token);
        Navigate('/frontend/src/Components/Pages/HomePage.js');
      }
    })
    .catch((error) => {
      console.error('Erreur lors de la requête fetch :', error);
    });
}
function addEventListenerOnLoginBtn() {
  const loginBtn = document.querySelector('#loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', (event) => {
      event.preventDefault();
      handleLogin();
    });
  } else {
    console.error("L'élément avec l'ID loginBtn n'a pas été trouvé.");
  }
}

addEventListenerOnLoginBtn();

};

export default LoginPage;
