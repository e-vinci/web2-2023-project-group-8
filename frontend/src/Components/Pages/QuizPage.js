import arrowLeft from '../../img/arrow-left.svg';
import arrowRight from '../../img/arrow-right.svg';

const QuizPage = () => {
  const quizPage = `
    <section id="quiz">
      
      <div class="container">
        <div class="row">
          <div class="col-2 back-section">
            <img src="${arrowLeft}" id="arrow-left" alt="Left arrow">
            Back
          </div>
          <div class="col">
            <div class="quiz_question text-center">
              <h3>Which of the below best describes your skin type, Patrick?</h3>
            </div>
            <div class="d-flex justify-content-center quiz_responses">
              <button type="button" class="btn btn-lg">Dry</button>
              <button type="button" class="btn btn-lg">Normal</button>
              <button type="button" class="btn btn-lg">Oily</button>
            </div>
          </div>
          <div class="col-2 next-section">
            Next
            <img src="${arrowRight}" id="arrow-right" alt="Right arrow">
          </div>
        </div>
      </div>
    </section>
  `;
  const main = document.querySelector('main');
  main.innerHTML = quizPage;
  

  const previousButton = document.querySelector('.back-section');
  const quizQuestion = document.querySelector('.quiz_question');

  previousButton.addEventListener('click', () => {
    quizQuestion.style.transition = 'transform 0.5s ease-in-out';
    quizQuestion.style.transform = 'translateX(-1000%)';
  }); 
  
  /*
  const nextButton = document.querySelector('next-section');
  nextButton.addEventListener('click', () => {
    // On va a la question suivante
  }); 
  */
};

export default QuizPage;