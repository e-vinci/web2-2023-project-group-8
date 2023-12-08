/* eslint-disable import/no-extraneous-dependencies */
import anime from 'animejs';
import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

const main = document.querySelector('main');

const QuizPage = () => {
  clearPage();
  // Si l'utilisateur est connecté on lui demande le nom de sa routine
  if (localStorage.getItem('connected') === 'true') {
    AskUser();
  }else{
    quizz();
  }
};

function addToConnected(productIdentificaiton, skinCareIdentification){
  // Envoie le productID au backend
  fetch('http://localhost:3000/quizz/addProductToSkinCare', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      productId: productIdentificaiton,
      skinCareId: skinCareIdentification
    }),
  })
  .then(response => response.json());
};

function addToNotConnected(productIdentification,userSession){
  // Envoie le productID au backend
  fetch('http://localhost:3000/quizz/addProductToSkinCare', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      productId: productIdentification,
      sessionId: userSession
    }),
  })
  .then(response => response.json());
};

function addSkinCare(skinCareName, userId){
  fetch('http://localhost:3000/user/skinCare/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      intitule: skinCareName,
      idUtilisateur: userId
    }),
  })
  .then(response => response.json());
};

async function getLastSkinCareId(userId){
  const listSkinCareResponse = await fetch(`http://localhost:3000/user/skinCares/last?userId=${userId}`);
  const data = await listSkinCareResponse.json();

  return data.id;
}

function AskUser() {
  main.innerHTML = `
  <section>
    <div class="container">
      <div class="row">
        <div class="col-8 offset-2">
          <div class="quiz_question text-center">
            <h3>Quel est le nom de votre routine ?</h3>
          </div>
          <div class="d-flex justify-content-center quiz_responses selector1">
            <input type="text" class="form-control" id="skinCareName" placeholder="Nom de votre routine">
            <button type="button" class="btn btn-lg reponse" id="submitSkinCareName">Valider</button>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  const submitButton = document.getElementById('submitSkinCareName');
  submitButton.addEventListener('click', () =>{
    const skinCareName = document.getElementById('skinCareName').value;
    localStorage.setItem('skinCareName', skinCareName);

    addSkinCare(skinCareName, localStorage.getItem('userId'));

    quizz();
  });
}

async function quizz() {
  let currentQuestionIndex = 0;
  const listSkinCareResponse = await fetch(`http://localhost:3000/quizz/questions`);
  const data = await listSkinCareResponse.json();
  
  // Le rendu des question
  const renderQuestion = () => {
    const question = data[currentQuestionIndex];
    const response = question.expand && question.expand['reponses(question)'].map((resp) => `
      <button type="button" class="btn btn-lg reponse" data-product-id="${resp.produit}">${resp.reponse}</button>
    `).join('');

    // On affiche la question
    main.innerHTML = `
      <section id="quiz">
        <div class="container">
          <div class="row">
            <div class="col-8 offset-2">
              <div class="quiz_question text-center">
                <h3>${question.question}</h3>
                <p>${question.tips}</p>
              </div>
              <div class="d-flex justify-content-center quiz_responses selector1">${response}</div>
            </div>
          </div>
        </div>
      </section>`;

    // On anime la les reponses
    anime({
      targets: '.reponse',
      translateX: 400,
      delay: anime.stagger(200, { from: 'last' }),
      easing: 'easeInOutExpo',
      duration: 500,
      direction: 'reverse',
    });

    // Navigation entre les questions
    const navigateToNextQuestion = () => {

      // eslint-disable-next-line no-plusplus
      currentQuestionIndex++;
      
      // Si on est à la fin du quizz, on redirige vers la page XXX
      if(currentQuestionIndex >= data.length){
        // TODO: Rediriger vers la page adéquate
        Navigate('/');
      } else {
        renderQuestion();
      }
    };

    // Ajoutez les écouteurs d'événements après avoir rendu la question
    const button = document.querySelectorAll('.reponse');
    button.forEach((btn) => {
      // On récupère le data-product-id et le stocke dans productID
      const productID = btn.dataset.productId; 
    
      btn.addEventListener('click', async () => { 
        if (localStorage.getItem('connected') === 'true') {

          const userId = localStorage.getItem('userId');
          const lastSkinCareId =  await getLastSkinCareId(userId);
          
          addToConnected(productID, lastSkinCareId);
        }
        else{
          addToNotConnected(productID,localStorage.getItem('userId'));
        }
        navigateToNextQuestion();

      });
    });
  };

  // Lancement du quizz
  renderQuestion();
};

export default QuizPage;
