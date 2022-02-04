import { container } from '../NavigationBlock/index';
import getComments from '../../services/api/api';
import './style.scss';

const headers = ['id', 'name', 'email', 'text'];

class UserDataBlock {
  constructor(container) {
    this.init(container);
  }

  init(container) {
    this.render(container);
  }

  render(container) {
    const article = document.createElement('article');
    this.renderList(article);
    container.appendChild(article);
  }

  async renderList(container) {
    const data = await getComments();
    console.log(data);

    Object.keys(data).forEach((key) => {
      const div = document.createElement('div');
      div.classList.add('userData');
      headers.forEach((el) => {
        const p = document.createElement('p');
        p.innerText = `${el} : ${data[key][el]}`;
        div.append(p);
      });
      container.appendChild(div);
    });
  }
}

export default UserDataBlock;
