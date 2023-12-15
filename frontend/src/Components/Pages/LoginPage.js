import logoImage from '../../img/icon.png';


const main = document.querySelector('main');

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

                <form>
                  <p>Connectez-vous</p>
                  <br>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control"
                      placeholder="Adresse mail" />
                    <label class="form-label" for="form2Example11">Nom d'utilisateur</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control" />
                    <label class="form-label" for="form2Example22">Mot de passe</label>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Se connecter
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

  const body = document.querySelector('body');
  body.style.overflow = 'auto';
};
export default LoginPage;
