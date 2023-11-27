// import arrowLeft from '../../img/arrow-left.svg';

const QuizPage = () => {
  const quizPage = `
    <section id="quiz">
      
      <div class="container">
        <div class="row">
          
          <div class="col">
            <div class="quiz_question text-center">
              <h3>Quel est votre type de peau ?</h3>
              <p>Tips : si vous ne connaissez pas votre type de peau vous pouvez vous nettoyer le visage, attendre 30min et si votre peau tiraille: vous avez la peau séche, si votre peau devient luisante sur votre zone t et seche sur vos joues vous avez la peau mixte, si votre peau devient luisante sur l’ensemble vous avez la peau grasse et si votre peau reste douce c’est que vous avez une peau normal</p>
            </div>
            <div class="d-flex justify-content-center quiz_responses selector1">
              <button type="button" class="btn btn-lg">peau sèche</button>
              <button type="button" class="btn btn-lg">peau normale</button>
              <button type="button" class="btn btn-lg">peau mixte</button>
              <button type="button" class="btn btn-lg">peau grasse</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
  const main = document.querySelector('main');
  main.innerHTML = quizPage;

  const button = document.querySelector('.selector1');
  button.addEventListener('click', () => {
    main.innerHTML=`<section id="quiz">
      
      <div class="container">
        <div class="row">
          
          <div class="col">
            <div class="quiz_question text-center">
              <h3>Quel problème souhaitez-vous traiter en premier ?</h3>
            </div>
            <br>
            <div class="d-flex justify-content-center quiz_responses selector">
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
    </section>`
    
  


  })
  
  
/*
  const previousButton = document.querySelector('.back-section');
  const quizQuestion = document.querySelector('.quiz_question');

  previousButton.addEventListener('click', () => {
    quizQuestion.style.transition = 'transform 0.5s ease-in-out';
    quizQuestion.style.transform = 'translateX(-1000%)';
  }); 
  
  
  const nextButton = document.querySelector('next-section');
  nextButton.addEventListener('click', () => {
    // On va a la question suivante
  }); 
  */
};

export default QuizPage;