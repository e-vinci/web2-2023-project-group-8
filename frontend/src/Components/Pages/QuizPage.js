/* eslint-disable import/no-extraneous-dependencies */
import anime from 'animejs';
import { clearPage } from '../../utils/render';
import {
  pushProduct,
  popProduct,
  getProductsList,
  cleanProductsList } from  '../../models/quizzData';

import Navigate from '../Router/Navigate';
import arrowLeft from '../../img/arrow-left.svg';

const main = document.querySelector('main');

// TODO: A SUPPRIMER QUAND ON AURA LE LOGIN
// Variable qu'on set à true si l'utilisateur est connecté  (pour le moment on le set à true pour tester)
// Mais c'est a faire dasns le login
localStorage.setItem('connected', true);
// Enlever le commentaire pour tester le quizz en étant connecté
localStorage.setItem('userId', '6nxn1fcl4r3wus2');

if (localStorage.getItem('connected') === 'false' || localStorage.getItem('connected') === null || localStorage.getItem('connected') === undefined) {
  // Générer un nouveau userId à chaque fois que la page est rechargée
  const userUniqueID = Math.random().toString(36).substring(2) + Date.now().toString(36);
  localStorage.setItem('userId', userUniqueID);
  // Si l'utilisateur n'est pas connecté, utiliser le userId généré

  localStorage.setItem('userId', userUniqueID);
}


const userIdentification = localStorage.getItem('userId');
const lastSkinCareId =  await getLastSkinCareId(userIdentification);
// Elimine les doublons dans la liste des produits
const productSet = new Set();

cleanProductsList();

const QuizPage = () => {
  clearPage();
  // Si l'utilisateur est connecté on lui demande le nom de sa routine
  if (localStorage.getItem('connected')) {
    AskUser();
  }else{
    quizz();
  }
};

async function addToConnected(productIdentificaiton, skinCareIdentification){
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
  const getAllQuestions = await fetch(`http://localhost:3000/quizz/questions`);
  const data = await getAllQuestions.json();
  
  // Le rendu des question
  const renderQuestion = () => {
    const question = data[currentQuestionIndex];
    const response = question.expand && question.expand['reponses(question)'].map((resp) => `
      <button type="button" class="btn btn-lg reponse" data-product-id="${resp.produit}">${resp.reponse}</button>
    `).join('');

    // On affiche la question
    main.innerHTML = `
      <section id="quiz">
      <div class="row">
          <div class="col-2 back-section">
            <img src="${arrowLeft}" id="arrow-left" alt="Left arrow">
            Back
          </div>
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
    if(currentQuestionIndex === data.length){
      if(localStorage.getItem('connected')){
        getProductsList().forEach((product) => {
          productSet.add(product);
        });
        productSet.forEach(async (product) => {
          await addToConnected(product, lastSkinCareId);
        });
      }
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
      pushProduct(productID);
      navigateToNextQuestion();
     });
   });

   const backButton = document.querySelector('.back-section');
   backButton.addEventListener('click', () => {
     currentQuestionIndex -=1;
     popProduct();
     renderQuestion();
   });
  };

  // Lancement du quizz
  renderQuestion();
};

export default QuizPage;

