/* eslint-disable import/no-extraneous-dependencies */
import anime from 'animejs';
import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

const main = document.querySelector('main');

const QuizPage = () => {
  clearPage();
  quizz();
};



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
      btn.addEventListener('click', navigateToNextQuestion);
    });
  };

  // Lancement du quizz
  renderQuestion();
};

export default QuizPage;
