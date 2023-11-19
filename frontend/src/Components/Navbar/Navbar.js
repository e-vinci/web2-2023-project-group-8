// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';

import Navigate from '../Router/Navigate';

import logoImage from '../../img/icon.png';

const Navbar = () => {
  const navbar = `
    <div class="d-flex justify-content-between align-items-center mb-3 mb-md-0 px-4 py-3">
      <a id="homepage-logo">
        <img src="${logoImage}" width="180">
      </a>
      <div class="dropdown show">
        <div class="hamburger-icon" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </div>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" id="dropdown-home">Accueil</a>
          <a class="dropdown-item" id="dropdown-quiz">Quizz</a>
        </div>
      </div>
    </div>
  `;

  const navbarWrapper = document.querySelector('#navbarWrapper');
  navbarWrapper.innerHTML = navbar;

  document.querySelector('#homepage-logo').addEventListener('click', () => {
    Navigate('/');
  });

  document.querySelector('#dropdown-home').addEventListener('click', () => {
    Navigate('/');
  });

  document.querySelector('#dropdown-quiz').addEventListener('click', () => {
    Navigate('/quiz');
  });

};

export default Navbar;
