import logoImage from '../../img/icon.png';
import Navigate from '../Router/Navigate';

const main = document.querySelector('main');
const body = document.querySelector('body');
let successLogin = false;

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
                  <input type="text" class="form-control" id="formUsername" placeholder="Nom d'utilisateur" />
                  </div>

                  <div class="form-outline mb-4">
                  <input type="password" class="form-control" id="formPassword" placeholder="Mot de passe" />
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button type="button" id="loginBtn" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3">Se connecter
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
                <p class="small mb-0">En créant un compte utilisateur sur Izyskin, vous aurez désormais accès à tous
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
  const username = document.getElementById('formUsername');
  const password = document.getElementById('formPassword');
  const loginBtn = document.getElementById('loginBtn');
  loginBtn.addEventListener('click', () => {
    loginUser(username.value, password.value);
    if (successLogin) {
      Navigate('/quiz');
    } else {
      // eslint-disable-next-line no-alert
      alert('Erreur lors de la connexion');
    }
  });
};
function loginUser(userName, passwd) {
  try{
    fetch('http://localhost:3000/auths/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: userName,
      password: passwd,
    }),
  }).then((res) => res.json());
  successLogin = true;
  localStorage.setItem('connected', 'true');
  } catch (error) {
    // eslint-disable-next-line no-template-curly-in-string
    throw new Error('Erreur lors de la requête fetch : ${error}');
  }
}

export default LoginPage;