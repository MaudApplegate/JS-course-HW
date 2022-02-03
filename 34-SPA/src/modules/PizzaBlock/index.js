class PizzaBlock {
  constructor(container) {
    const el = document.createElement('p');
    el.innerHTML = 'PizzaBlock Block is run';
    container.appendChild(el);
  }
}

export default PizzaBlock;
