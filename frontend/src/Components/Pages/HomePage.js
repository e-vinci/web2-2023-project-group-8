import image1 from '../../img/cover.png';
import image2 from '../../img/cover2.jpg';
import image3 from '../../img/cover3.jpg';

import Navigate from '../Router/Navigate';

const HomePage = () => {
    const homePage = `
    <section class="grid-container-homepage"">
      <div class="grid-item-homepage">
          <img id="bg" src="${image1}" alt="homepage" class="homepage">
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

changeBg();
setInterval(changeBg, 3000);

function changeBg(){
  const images = [image1,image2, image3];

  const img = document.querySelector('#bg');
  if (img) {
    const bg = images[Math.floor(Math.random() * images.length)];
    img.src = bg;
  }
}

const body = document.querySelector('body');
// Ajouter un gestionnaire d'événements sur le body pour empêcher le défilement par défaut
body.addEventListener('wheel', preventDefaultScroll, { passive: false });
body.addEventListener('touchmove', preventDefaultScroll, { passive: false });

// Empêcher le défilement par défaut
function preventDefaultScroll(event) {
  event.preventDefault();
}

export default HomePage;
