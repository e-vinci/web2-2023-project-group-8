import logoImage from '../../img/icon.png';

const main = document.querySelector('main');

const LoginPage = () => {
  main.innerHTML = `
    <section class="gradient-form" style="margin-top:10%;">
      <div class="login-container container py-auto">
        <div class="card rounded-3" style="margin-left: 4rem; margin-right: 4rem;">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">
                <div class="text-center">
                  <img src="${logoImage}" style="width: 185px;" alt="logo">
                </div>
                <form class="mt-5">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="form2Example11">
                    <label for="form2Example11">Nom d'utilisateur</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="form2Example22"/>
                    <label class="form-label" for="form2Example22">Mot de passe</label>
                  </div>
                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-succes gradient-custom-2 mb-3" type="button">Se connecter
                      </button>
                  </div>
                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Pas encore de compte ?</p>
                    <a href="/register"><button type="button" class="btn btn-succes">Créer un compte</button></a>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2 loginhalf">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4 text-center">Le saviez-vous ?</h4>
                <p class="medium mb-0">En créant un compte utilisateur sur Izyskin, vous aurez désormais accès à tous
                vos diagnostiques et vos recommandations de produits passés.</p>
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
