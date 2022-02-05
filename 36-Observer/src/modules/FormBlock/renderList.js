import { getAllReviews } from '../../services/api/apiReview';

class RenderListReview {
  constructor(container) {
    this.init(container);
  }

  async init(container) {
    const data = await getAllReviews();
    this.render(container, data);
  }

  render(container, data) {
    const ul = document.createElement('li');
    const tags = ['name', 'email', 'review'];
    data.forEach((e) => {
      const li = document.createElement('li');

      tags.forEach((tag) => {
        const el = document.createElement('h2');
        el.id = `${tag}Review`;
        el.innerHTML = e[tag];
        li.appendChild(el);
      });

      const button = document.createElement('button');
      button.innerHTML = 'Delete Review';
      button.id = e.id;
      li.appendChild(button);

      ul.appendChild(li);
    });
    container.appendChild(ul);
  }
}

export default RenderListReview;
