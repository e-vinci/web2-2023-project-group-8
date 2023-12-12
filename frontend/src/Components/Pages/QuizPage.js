/* eslint-disable import/no-extraneous-dependencies */
import anime from 'animejs';
import { clearPage } from '../../utils/render';
import {
  pushProduct,
  popProduct,
  getProductsList,
  cleanProductsList,
} from '../../models/quizzData';

import Navigate from '../Router/Navigate';
import arrowLeft from '../../img/arrow-left.svg';

// TODO: A SUPPRIMER QUAND ON AURA LE LOGIN
// Variable qu'on set à true si l'utilisateur est connecté  (pour le moment on le set à true pour tester). Mais c'est a faire dans le login
sessionStorage.setItem('connected', true);
// Enlever le commentaire pour tester le quizz en étant connecté
sessionStorage.setItem('userId', 'f51ddnvv6ts033w');

const userIdentification = sessionStorage.getItem('userId');

// On crée un set pour éviter les doublons
const productSet = new Set();
const main = document.querySelector('main');

cleanProductsList();

/**
 * Page du quizz
 */
const QuizPage = () => {
  clearPage();
  // Si l'utilisateur est connecté on lui demande le nom de sa routine
  if (sessionStorage.getItem('connected')) {
    AskUser();
  } else {
    quizz();
  }
};

/**
 *  Adds a product to the routine of the connected user
 * @param {*} productIdentificaiton Product ID
 * @param {*} skinCareIdentification SkinCare ID
 * @throws {Error} - Error if the request fails
 */
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

/**
 *  Adds a skincare routine to the connected user
 * @param { } skinCareName  Name of the skincare routine
 * @param {*} userId  User ID
 */
function addSkinCare(skinCareName, userId) {
  fetch('http://localhost:3000/user/skinCare/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      intitule: skinCareName,
      idUtilisateur: userId,
    }),
  }).then((response) => response.json());
}

/**
 * Gets the last skincare routine ID of the connected user
 * @param {*} userId User ID
 * @returns {Promise} Promise object represents the last skincare routine ID
 */
async function getLastSkinCareId(userId) {
  const listSkinCareResponse = await fetch(
    `http://localhost:3000/user/skinCares/last?userId=${userId}`,
  );
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
  submitButton.addEventListener('click', () => {
    const skinCareName = document.getElementById('skinCareName').value;
    sessionStorage.setItem('skinCareName', skinCareName);

    addSkinCare(skinCareName, sessionStorage.getItem('userId'));

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
    const response =
      question.expand &&
      question.expand['reponses(question)']
        .map(
          (resp) => `
      <button type="button" class="btn btn-lg reponse" data-product-id="${resp.produit}">${resp.reponse}</button>
    `,
        )
        .join('');

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
    const navigateToNextQuestion = async () => {
      currentQuestionIndex += 1;

      // Si on est à la fin du quizz, on redirige vers la page adéquate sinon on affiche la question suivante
      if (currentQuestionIndex === data.length) {
        if (sessionStorage.getItem('connected')) {
          const lastSkinCareId = await getLastSkinCareId(userIdentification);
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

      btn.addEventListener('click', () => {
        pushProduct(productID);
        navigateToNextQuestion();
      });
    });

    // On ajoute un écouteur d'événement sur le bouton de retour qui permet de revenir à la question précédente
    const backButton = document.querySelector('.back-section');
    backButton.addEventListener('click', () => {
      currentQuestionIndex -= 1;
      popProduct();
      renderQuestion();
    });
  };

  // Lancement du quizz
  renderQuestion();
}

export default QuizPage;
