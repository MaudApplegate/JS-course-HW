import { createReview } from '../../../../../ClassWork/36Observer/src/services/api/reviewsApi';

class FormBlock {
  constructor(container) {
    this.render(container);
  }

  render(container) {
    const form = document.createElement('form');
    form.classList.add('form');

    form.addEventListener('submit', this.handleSubmit);

    const formElem = ['name', 'email', 'review'];
    formElem.forEach((el) => {
      const input = document.createElement('input');
      input.id = el;
      input.name = el;
      input.placeholder = el;
      form.appendChild(input);
    });

    const button = document.createElement('button');
    button.innerHTML = 'Send request';
    form.appendChild(button);

    container.appendChild(form);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const inputs = [...e.target.elements];
    const data = inputs.reduce((acc, input) => {
      if (input.name) {
        acc[input.name] = input.value;
      }
      return acc;
    }, {});
    console.log(data);
    // createReview(data); //* ревью отдельным js
  };
}

export default FormBlock;
