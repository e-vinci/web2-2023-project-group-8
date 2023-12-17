// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';

import logoImage from '../../img/icon.png';
import Navigate from '../Router/Navigate';



const navbarWrapper = document.querySelector('#navbarWrapper');

const Navbar = () => {
  const navbar = `
  <div class="d-flex justify-content-between align-items-center mb-3 mb-md-0 px-4 py-3" id="nav">
    <a href="/" data-uri="/" id="homepage-logo">
      <img src="${logoImage}">
    </a>
  <ul id="nav_titles">
    <li><a href="/" data-uri="/">Accueil</a></li>
    <li><a href="/quiz" data-uri="/quiz">Diagnostic de peau</a></li>
    ${sessionStorage.getItem('admin') === 'true'
    ? '<li><a href="/admin" data-uri="/admin">Administration</a></li>' : '' }
    ${ sessionStorage.getItem('connected') === 'true' 
    ? '<li><a href="/">Historique</a></li><li><a>Se deconnecter</a></li>' 
    : '<li><a href="/login" data-uri="/login">Connexion</a></li>'}
    
  </ul>
  `;

  navbarWrapper.innerHTML = navbar;
  const deco = document.getElementById('deco');
  deco?.addEventListener('click', () => {
    sessionStorage.clear();
    Navbar();
    Navigate('/');
  });
};


export default Navbar;