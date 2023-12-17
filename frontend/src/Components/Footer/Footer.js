// eslint-disable-next-line no-unused-vars
import {  Footer as BootstrapFooter } from 'bootstrap';

import Navigate from '../Router/Navigate';

const Footer = () => {
    const footer = `
        <div class="footer fixed-bottom">
            <div class="container">
                <span class="text-muted" id="terms-conditions">Terms and conditions</span>
            </div>
        </div>
    `;
    const footerWrapper = document.querySelector('#footer');
    footerWrapper.innerHTML = footer;

    document.querySelector('#terms-conditions').addEventListener('click', () => {
        Navigate('/t-and-c');
    });
};

export default Footer;