import illustrationImage1 from '../../img/cover2.jpg';
import illustrationImage2 from '../../img/cover.png';

import Navigate from '../Router/Navigate';

const HomePage = () => {
    const homePage = `
    <section id="homePage">
      <div class="grid-container-homepage">
        <div class="grid-item-homepage">
            <img id="bg" src="${illustrationImage1}" alt="homepage" class="homepage">
        </div>
        <div class="grid-item-homepage white-background">
            <div id ="homePage-info">
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
    </div>
    </section>`;

  const main = document.querySelector('main');
  main.innerHTML = homePage;

  changeBg();

  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    // console.log('On démarre le quizz!');
    Navigate('/quiz');
  });  
};

setInterval(changeBg, 3000);

function changeBg(){
  const images = [illustrationImage1, illustrationImage2];

  const img = document.querySelector('#bg');
  if (img) {
    const bg = images[Math.floor(Math.random() * images.length)];
    img.src = bg;
  }
}

export default HomePage;
