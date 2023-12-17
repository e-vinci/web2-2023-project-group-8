import anime from "animejs";

const clearPage = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';
};

const renderPageTitle = (title) => {
  if (!title) return;
  const main = document.querySelector('main');
  const pageTitle = document.createElement('h4');
  pageTitle.innerText = title;
  main.appendChild(pageTitle);
};

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', options);
}

function showLoader() {
  const main = document.querySelector('main');
  main.innerHTML = `
    <div class="loader-container">
      <div class="custom-loader"></div>
    </div>
  `;
  anime({
    targets: '.custom-loader',
    rotate: '1turn',
    duration: 1000,
    easing: 'linear',
    loop: true
  });
}

export { clearPage, renderPageTitle, formatDate, showLoader };
