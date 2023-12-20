/* eslint-disable import/no-extraneous-dependencies */
import anime from 'animejs';
import { showLoader } from '../../utils/render';
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


const main = document.querySelector('main');
document.querySelector('body').style.overflow = 'auto';


/**
 * Page du quizz
 */
const QuizPage = () => {
  cleanProductsList();
  showLoader();
  
  // Si l'utilisateur est connecté on lui demande le nom de sa routine
  if (sessionStorage.getItem('connected') === 'true') {
    AskUser();
  } else {
    quizz();
  }
};


function AskUser() {
  console.log(sessionStorage.getItem('userId'));
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
                ${currentQuestionIndex < data.length - 1 ? '<div class="next-section text-center">Next question</div>' : ''}
              </div>
            </div>
            <div class="progress" style="width: 100%;">
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
          if (sessionStorage.getItem('connected') === 'true') {
          
            await addSkinCare(sessionStorage.getItem('skinCareName'), sessionStorage.getItem('userId'));

            const lastSkinCareId = await getLastSkinCareId(sessionStorage.getItem('userId'));
            
            getProductsList().forEach(async (product) => {
              const productId = product.id;
              await addToConnected(productId, lastSkinCareId);
            });
          }

          Navigate('/diagnosis');
        } else {
          renderQuestion();
        }
      };

        const buttons = document.querySelectorAll('.reponse');
      buttons.forEach((btn) => {
        const productID = btn.dataset.productId.split(",");

        btn.addEventListener('click', async () => {
          try {
            productID.forEach(async (id) => {
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
      
      // On ajoute un écouteur d'événement sur le bouton suivant qui permet de passer à la question suivante
      if (currentQuestionIndex<data.length - 1){
        const nextButton = document.querySelector('.next-section');
        nextButton.addEventListener('click', () => {
          navigateToNextQuestion();
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