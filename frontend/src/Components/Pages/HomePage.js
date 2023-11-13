import illustrationImage from '../../img/cover2.jpg';

import Navigate from '../Router/Navigate';

const HomePage = () => {
    const homePage = `
    <section id="homePage">
      <div class="row ">
        <div class="homePage-container col-lg-6">
            <img src="${illustrationImage}" alt="homePage" >
            
          </div>
        <div id ="homePage-info" class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">
            Build Your Personalized Skincare Routine
          </h1>
          <p class="lead">
            Acquire a uniquely designed daily plan by easily participating in a brief 2-minute survey. 
            Our team of professionals will thoroughly evaluate your concerns and devise the perfect regimen specifically for you.              
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-lg">Start Quizz</button>
          </div>
        </div>
      </div> 
    </section>`;

  const main = document.querySelector('main');
  main.innerHTML = homePage;

  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    // console.log('On démarre le quizz!');
    Navigate('/quiz');
  });  
};

export default HomePage;
