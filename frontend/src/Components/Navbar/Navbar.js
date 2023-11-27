// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';

import Navigate from '../Router/Navigate';

import logoImage from '../../img/icon.png';

const Navbar = () => {
  const navbar = `
  <div class="dropdown show">
        <div class="hamburger-icon" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </div>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" id="dropdown-home">accueil</a>
          <a class="dropdown-item" id="dropdown-quiz">diagnostic de peau</a>
        </div>
      </div>
  </div>
  <div class="d-flex justify-content-between align-items-center mb-3 mb-md-0 px-4 py-3" id="nav">
    <a href="/" data-uri="/" id="homepage-logo">
      <img src="${logoImage}">
    </a>
  <ul id="nav_titles">
    <li><a href="/" data-uri="/">accueil</a></li>
    <li><a href="/quiz" data-uri="/quiz">diagnostic de peau</a></li>
  </ul>
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
