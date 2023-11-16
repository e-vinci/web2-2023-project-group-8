// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';

import Navigate from '../Router/Navigate';

import logoImage from '../../img/icon.png';

const Navbar = () => {
  const navbar = `
    <div class="d-flex justify-content-between align-items-center mb-3 mb-md-0 px-4 py-3" data-uri="/">
      <a id="homepage-logo">
        <img src="${logoImage}" width="180">
      </a>
      <div class="dropdown show">
  
        <div class="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  `;

  const navbarWrapper = document.querySelector('#navbarWrapper');
  navbarWrapper.innerHTML = navbar;

  const logo = document.querySelector('#homepage-logo');
  logo.addEventListener('click', () => {
    Navigate('/');
  });
};

export default Navbar;
