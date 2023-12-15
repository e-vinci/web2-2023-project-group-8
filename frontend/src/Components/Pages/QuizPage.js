/* eslint-disable import/no-extraneous-dependencies */
import anime from 'animejs';
import { clearPage } from '../../utils/render';
import {
  pushProduct,
  popProduct,
  getProductsList,
  cleanProductsList 
} from '../../models/quizzData';
  
import { 
  addToConnected, 
  addSkinCare, 
  getLastSkinCareId, 
  getProducts 
} from '../../models/quizz';

import Navigate from '../Router/Navigate';
// import arrowLeft from '../../img/arrow-left.svg';

// TODO: A SUPPRIMER QUAND ON AURA LE LOGIN
// Variable qu'on set à true si l'utilisateur est connecté  (pour le moment on le set à true pour tester). Mais c'est a faire dans le login
localStorage.setItem('connected', "false");
// Enlever le commentaire pour tester le quizz en étant connecté
localStorage.setItem('userId', 'f51ddnvv6ts033w');

const userIdentification = localStorage.getItem('userId');

// On crée un set pour éviter les doublons
const productSet = new Set();
const main = document.querySelector('main');
document.querySelector('body').style.overflow = 'auto';


/**
 * Page du quizz
 */
const QuizPage = () => {
  cleanProductsList();
  clearPage();
  // Si l'utilisateur est connecté on lui demande le nom de sa routine
  if (localStorage.getItem('connected') === 'true') {
    AskUser();
  } else {
    quizz();
  }
};


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
    localStorage.setItem('skinCareName', skinCareName);
    quizz();
  });
}

async function quizz() {
  let currentQuestionIndex = 0;
  try {
    const getAllQuestions = await fetch(`http://localhost:3000/quizz/questions`);
    if (!getAllQuestions.ok) {
      throw new Error('Failed to get quiz questions');
    }

    const data = await getAllQuestions.json();

    // Le rendu des question
    const renderQuestion = () => {
      const question = data[currentQuestionIndex];
      const response =
        question.expand &&
        question.expand['reponses(question)'].map(
          (resp) => `<button type="button" class="btn btn-lg reponse" data-product-id="${resp.produit}">${resp.reponse}</button>`,
        ).join('');

      // On affiche la question
      main.innerHTML = `
        <section id="quiz" class="d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-8 offset-2 flex-column justify-content-center">
                <div class="quiz_question text-center">
                    <h4 style="color: gray">${currentQuestionIndex+1}/${data.length}</h4>
                  <h3>${question.question}</h3>
                  <p>${question.tips}</p>
                </div>
                <div class="d-flex justify-content-center quiz_responses">${response}</div>
                ${currentQuestionIndex > 0 ? '<div class="back-section text-center">Previous question</div>' : ''}  
              </div>
            </div>
            <div class="progress">
              <div class="progress-bar bg-secondary" role="progressbar" style="width: ${((currentQuestionIndex + 1) / data.length) * 100}%" aria-valuenow="${currentQuestionIndex + 1}" aria-valuemin="0" aria-valuemax="${data.length}"></div>
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

        // Mettez à jour la barre de progression
        const progressBar = document.querySelector('.progress-bar');
        progressBar.style.width = `${((currentQuestionIndex + 1) / data.length) * 100}%`;
        progressBar.setAttribute('aria-valuenow', currentQuestionIndex + 1);


        // Si on est à la fin du quizz, on redirige vers la page adéquate sinon on affiche la question suivante
        if (currentQuestionIndex === data.length) {
          getProductsList().forEach((product) => { 
            productSet.add(product); 
          });

          if (localStorage.getItem('connected') === 'true') {
            await addSkinCare(localStorage.getItem('skinCareName'), localStorage.getItem('userId'));

            const lastSkinCareId = await getLastSkinCareId(userIdentification);
            
            productSet.forEach(async (product) => {
              const productId = product.id;
              await addToConnected(productId, lastSkinCareId);
            });
          }

          localStorage.setItem('savdProducts', JSON.stringify(getProductsList())); // Stocker savedProducts dans localStorage
          Navigate('/diagnosis');
        } else {
          renderQuestion();
        }
      };

      // Ajoutez les écouteurs d'événements après avoir rendu la question
      const buttons = document.querySelectorAll('.reponse');
      buttons.forEach((btn) => {
        const productID = btn.dataset.productId;
        console.log(productID);

        btn.addEventListener('click', async () => {
          try {
            productID.split(",").forEach(async (id) => {
            const productDetails = await getProducts(id);
            pushProduct(productDetails);
            });
            navigateToNextQuestion();
          } catch (error) {
            throw new Error('Error in button click event:');
          }
        });
      });

      // On ajoute un écouteur d'événement sur le bouton de retour qui permet de revenir à la question précédente
      if (currentQuestionIndex > 0) {
        const backButton = document.querySelector('.back-section');
        backButton.addEventListener('click', () => {
          currentQuestionIndex -= 1;
          popProduct();
          renderQuestion();
        });
      }
    };

    // Lancement du quizz
    renderQuestion();
  } catch (error) {
    throw new Error('Error in quizz:');
  }
}

export default QuizPage;