import Navigate from "../Router/Navigate";

const main = document.querySelector('main');
const body = document.querySelector('body');

const LoginPage = () => {
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
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                  <label class="form-label formNom" for="form3Example1cg">Nom</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                  <label class="form-label formPrenom" for="form3Example1cg">Prénom</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                  <label class="form-label formUsername" for="form3Example1cg">Nom d'utilisateur</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                  <label class="form-label formEmail" for="form3Example3cg">Adresse mail</label>
                </div>

                <input class="form-control form-control-lg" id="formFileLg" type="file" />
                <div class="small text-muted mt-2 formPicture">Choisissez une photo de profil. Ce champ est optionnel.</div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                  <label class="form-label formPassword" for="form3Example4cg">Mot de passe</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                  <label class="form-label formPasswordConfirm" for="form3Example4cdg">Confirmer votre mot de passe</label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="button" id="registerBtn"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">S'inscrire</button>
                </div>

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

const handleRegister = () => {
  const username = document.getElementById('form3Example1cg').value;
  const password = document.getElementById('form3Example4cg').value;

  fetch('http://localhost:3000/api/registerfunc', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        console.log('Error:', res.error);
      } else {
        console.log('Registration successful. Redirecting to login page...');
        Navigate('/frontend/src/Components/Pages/LoginPage.js')
      }
    });
  };

const registerBtn = document.getElementById('registerBtn');
registerBtn.addEventListener('click', handleRegister);
}

export default LoginPage;