import AvrilBlock from '../AvrilBlock/index.js';
import PizzaBlock from '../PizzaBlock/index.js';
import UserDataBlock from '../UserDataBlock/index.js';
import './style.scss';

const APP_ROUTES = {
  AvrilBlock: 'Avril Lavign',
  PizzaBlock: 'Pizza Order',
  UserDataBlock: 'User Data',
};

class NavigationBlock {
  constructor(container) {
    return this.render(container);
  }

  render(container) {
    const el = document.createElement('div');
    this.renderNavigation(el);

    switch (window.location.hash.slice(1)) {
      case Object.keys(APP_ROUTES)[0]:
        this.renderAvrilBlock(el);
        break;
      case Object.keys(APP_ROUTES)[1]:
        this.renderPizzaBlock(el);
        break;
      case Object.keys(APP_ROUTES)[2]:
        this.renderUserDataBlock(el);
        break;
      default:
    }
    container.innerText = '';
    container.appendChild(el);
  }

  renderAvrilBlock(container) {
    const el = new AvrilBlock(container);
    return el;
  }

  renderPizzaBlock(container) {
    const el = new PizzaBlock(container);
    return el;
  }

  renderUserDataBlock(container) {
    const el = new UserDataBlock(container);
    return el;
  }

  renderNavigation(container) {
    const nav = document.createElement('nav');

    Object.keys(APP_ROUTES).forEach((route) => {
      const a = document.createElement('a');
      a.innerHTML = APP_ROUTES[route].toUpperCase('a');
      a.href = '#';
      a.id = route;

      nav.appendChild(a);
    });

    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        window.location.hash = e.target.id;
      } else {
        return;
      }
    });

    container.appendChild(nav);
  }
}

export default NavigationBlock;
