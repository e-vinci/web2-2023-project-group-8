import logoImage from '../../img/icon.png';
import Navigate from '../Router/Navigate';
import Navbar from '../Navbar/Navbar';

const main = document.querySelector('main');
const body = document.querySelector('body');
body.style.overflow = 'auto';

let successLogin = false;

/**
 * Renders the login page.
 */
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
  const username = document.getElementById('formUsername');
  const password = document.getElementById('formPassword');
  const loginBtn = document.getElementById('loginBtn');
  loginBtn.addEventListener('click', async () => {
    
    await loginUser(username.value, password.value);
    if (successLogin===true) {
      sessionStorage.setItem('connected', 'true');

      Navbar();
      Navigate('/');
    }
  });
};
/**
 * Logs in a user with the provided username and password.
 * @param {string} userName - The username of the user.
 * @param {string} passwd - The password of the user.
 * @returns {Promise<void>} - A promise that resolves when the login process is complete.
 * @throws {Error} - If there is an error during the login process.
 */
async function loginUser(userName, passwd) {
  try {
    const response = await fetch('http://localhost:3000/auths/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userName,
        password: passwd,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (!data) {
      // eslint-disable-next-line no-alert
      alert('Aucune donnée reçue de l\'API');
    }

    if (data.length === 1){
      successLogin = true;

      const userId = data[0].id;
      console.log(userId);

      sessionStorage.setItem('userId', userId);
      console.log(sessionStorage.getItem('userId'));
      

      if (data.verified === true) {
        sessionStorage.setItem('admin', 'true');
      }else{
        sessionStorage.setItem('admin', 'false');
      }

      Navigate('/');
    } else {
      // Show the error message in an alert
      // eslint-disable-next-line no-alert
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
  } catch (error) {
    throw new Error(`Erreur lors du fetch avec l'api ${error}`);
  }
}


export default LoginPage;