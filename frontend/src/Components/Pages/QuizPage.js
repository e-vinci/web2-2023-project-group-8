/* eslint-disable import/no-extraneous-dependencies */
import anime from 'animejs';
import arrowLeft from '../../img/arrow-left.svg';

const QuizPage = () => {
  const quizPage = `
    <section id="quiz">
      
      <div class="container">
        <div class="row">
        <div class="col-2">
        
      </div>
          
          <div class="col-8">
            <div class="quiz_question text-center">
              <h3 >Quel est votre type de peau ?</h3>
              <p>Tips : si vous ne connaissez pas votre type de peau vous pouvez vous nettoyer le visage, attendre 30min et si votre peau tiraille: vous avez la peau séche, si votre peau devient luisante sur votre zone t et seche sur vos joues vous avez la peau mixte, si votre peau devient luisante sur l’ensemble vous avez la peau grasse et si votre peau reste douce c’est que vous avez une peau normal</p>
            </div>
            <div class="d-flex justify-content-center quiz_responses selector1">
              <button type="button" class="btn btn-lg question">peau sèche</button>
              <button type="button" class="btn btn-lg question">peau normale</button>
              <button type="button" class="btn btn-lg question">peau mixte</button>
              <button type="button" class="btn btn-lg question">peau grasse</button>
            </div>  
          </div>
        </div>
      </div>
      <script src="/node_modules/animejs/lib/anime.min.js"></script>
    </section>
  `;
  const main = document.querySelector('main');
  main.innerHTML = quizPage;

  const button = document.querySelector('.selector1');
  button.addEventListener('click', () => {
    main.innerHTML = `<section id="quiz">
      
      <div class="container">
        <div class="row">
          <div class="col-2 back-section">
            <img src="${arrowLeft}" id="arrow-left" alt="Left arrow">
            Back
          </div>
          
          <div class="col-8">
            <div class="quiz_question text-center">
              <h3 class="question">Quel problème souhaitez-vous traiter en premier ?</h3>
            </div>
            <br>
            <div class="d-flex justify-content-center quiz_responses selector2">
              <button type="button" class="btn btn-lg question">boutons</button>
              <button type="button" class="btn btn-lg question">points noirs</button>
              <button type="button" class="btn btn-lg question">rougeurs</button>
              <button type="button" class="btn btn-lg question">rides</button>
              <button type="button" class="btn btn-lg question">teint terne</button>
              <button type="button" class="btn btn-lg question">peau irrégulière</button>
              <button type="button" class="btn btn-lg question">cernes</button>
              <button type="button" class="btn btn-lg question">tâches</button>
            </div>
          </div>
        </div>
      </div>
      <script src="/node_modules/animejs/lib/anime.min.js"></script>
    </section>`;

    const button2 = document.querySelector('.selector2');
    button2.addEventListener('click', () => {
      main.innerHTML = `<section id="quiz">
      
      <div class="container">
        <div class="row">
          <div class="col-2 back-section">
            <img src="${arrowLeft}" id="arrow-left" alt="Left arrow">
            Back
          </div>
          
          <div class="col-8">
            <div class="quiz_question text-center">
              <h3>Quel est votre budget ?</h3>
            </div>
            <br>
            <div class="d-flex justify-content-center quiz_responses selector3">
              <button type="button" class="btn btn-lg">petit budget</button>
              <button type="button" class="btn btn-lg">budget moyen</button>
              <button type="button" class="btn btn-lg">gros budget</button>

            </div>
          </div>
        </div>
      </div>
    </section>`;

      const button3 = document.querySelector('.selector3');
      button3.addEventListener('click', () => {
        main.innerHTML = `<section id="quiz">
      
      <div class="container">
        <div class="row">
          <div class="col-2 back-section">
            <img src="${arrowLeft}" id="arrow-left" alt="Left arrow">
            Back
          </div>
          
          <div class="col-8">
            <div class="quiz_question text-center">
              <h3>Dans quelle tranche d'âge est-ce que vous vous situez ?</h3>
            </div>
            <br>
            <div class="d-flex justify-content-center quiz_responses selector4">
              <button type="button" class="btn btn-lg">moins de 18 ans</button>
              <button type="button" class="btn btn-lg">entre 18 et 25 ans</button>
              <button type="button" class="btn btn-lg">entre 26 et 35 ans</button>
              <button type="button" class="btn btn-lg">entre 36 et 50 ans</button>
              <button type="button" class="btn btn-lg">plus de 50 ans</button>

            </div>
          </div>
        </div>
      </div>
    </section>`;

        const button4 = document.querySelector('.selector4');
        button4.addEventListener('click', () => {
          main.innerHTML = `<section id="quiz">
      
      <div class="container">
        <div class="row">
          <div class="col-2 back-section">
            <img src="${arrowLeft}" id="arrow-left" alt="Left arrow">
            Back
          </div>
          
          <div class="col-8">
            <div class="quiz_question text-center">
              <h3>À quelle fréquence êtes-vous exposé au soleil ?</h3>
            </div>
            <br>
            <div class="d-flex justify-content-center quiz_responses selector5">
              <button type="button" class="btn btn-lg">jamais</button>
              <button type="button" class="btn btn-lg">rarement</button>
              <button type="button" class="btn btn-lg">parfois</button>
              <button type="button" class="btn btn-lg">souvent</button>
              <button type="button" class="btn btn-lg">tout le temps</button>

            </div>
          </div>
        </div>
      </div>
    </section>`;

          const button5 = document.querySelector('.selector5');
          button5.addEventListener('click', () => {
            main.innerHTML = `<section id="quiz">
      
      <div class="container">
        <div class="row">
          <div class="col-2 back-section">
            <img src="${arrowLeft}" id="arrow-left" alt="Left arrow">
            Back
          </div>
          
          <div class="col-8">
            <div class="quiz_question text-center">
              <h3>Portez-vous du maquillage? Si oui, à quelle fréquence ?</h3>
            </div>
            <br>
            <div class="d-flex justify-content-center quiz_responses selector6">
              <button type="button" class="btn btn-lg">jamais</button>
              <button type="button" class="btn btn-lg">pour des occasions particulières</button>
              <button type="button" class="btn btn-lg">souvent</button>
              <button type="button" class="btn btn-lg">tous les jours</button>

            </div>
          </div>
        </div>
      </div>
    </section>`;
            const button6 = document.querySelector('.selector6');
            button6.addEventListener('click', () => {
              main.innerHTML = `<section id="quiz">
      
      <div class="container">
        <div class="row">
          <div class="col-2 back-section">
            <img src="${arrowLeft}" id="arrow-left" alt="Left arrow">
            Back
          </div>
          
          <div class="col-8">
            <div class="quiz_question text-center">
              <h3>Souhaitez vous traiter un autre problème ?</h3>
            </div>
            <br>
            <div class="d-flex justify-content-center quiz_responses selector7">
            <button type="button" class="btn btn-lg">boutons</button>
            <button type="button" class="btn btn-lg">points noirs</button>
            <button type="button" class="btn btn-lg">rougeurs</button>
            <button type="button" class="btn btn-lg">rides</button>
            <button type="button" class="btn btn-lg">teint terne</button>
            <button type="button" class="btn btn-lg">peau irrégulière</button>
            <button type="button" class="btn btn-lg">cernes</button>

            </div>
          </div>
        </div>
      </div>
    </section>`;
            });
          });
        });
      });
    });

    const previousButton = document.querySelector('.back-section');
    const quizQuestion = document.querySelector('.quiz_question');

    previousButton.addEventListener('click', () => {
      quizQuestion.style.transition = 'transform 0.5s ease-in-out';
      quizQuestion.style.transform = 'translateX(-1000%)';
    });
  });

  /*
  const nextButton = document.querySelector('next-section');
  nextButton.addEventListener('click', () => {
    // On va a la question suivante
  }); 
  */

  anime({
    targets: '.question ',
    translateX: 400,
    delay: anime.stagger(200, { from: 'last' }),
    easing: 'easeInOutExpo',
    duration: 500,
    direction: 'reverse',
  });
};

export default QuizPage;
