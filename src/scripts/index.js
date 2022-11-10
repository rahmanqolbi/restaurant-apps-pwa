import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/style.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
import './components/app-bar';
import './components/hero-section';
import './components/restaurants-section';
import './components/restaurant-item';
import './components/restaurant-detail';
import './components/favorite-section';
import './components/loading-indicator';
import './components/review-input';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
