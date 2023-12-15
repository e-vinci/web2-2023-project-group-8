const main = document.querySelector('main');

const RegisterPage = () => {
    main.innerHTML += `
      <section class="gradient-form">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6 mt-4">
              <h2 class="text-center mb-3">Créer un compte</h2>
              <form>
                <div class="form-outline mb-3">
                  <input placeholder="Nom" type="text" class="form-control form-control-lg"/>
                </div>
                <div class="form-outline mb-3">
                  <input placeholder="Prenom" type="text" class="form-control form-control-lg" />
                </div>
                <div class="form-outline mb-3">
                  <input placeholder="Nom d'utilisateur" type="text" class="form-control form-control-lg" />
                </div>
                <div class="form-outline mb-3">
                  <input placeholder="Adresse mail" type="email" class="form-control form-control-lg" />
                </div>
                <div class="form-outline mb-3">
                  <div class="small text-muted">Choisissez une photo de profil. Ce champ est optionnel.</div>
                  <input class="form-control form-control-lg" id="formFileLg" type="file" />
                </div>
                <div class="form-outline mb-3">
                  <input placeholder="Mot de passe" type="password" class="form-control form-control-lg" />
                </div>
                <div class="form-outline mb-3">
                  <input placeholder="Confirmer Mot de passe" type="password" class="form-control form-control-lg" />
                </div>
                <div class="form-check d-flex justify-content-center mb-4">
                  <input class="form-check-input me-2" type="checkbox" value=""/>
                  <label class="form-check-label" for="form2Example3g">
                    J'accepte les <a href="#!" class="text-body"><u>conditions d'utilisation</u></a>
                  </label>
                </div>
                <div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">S'inscrire</button>
                </div>
                <p class="text-center text-muted mt-1 mb-0">Vous avez déjà un compte ? <a href="/login"
                    class="fw-bold text-body"><u>Connectez-vous ici</u></a></p>
              </form>
            </div>
          </div>
        </div>
    </section>
  `;
}

export default RegisterPage;
