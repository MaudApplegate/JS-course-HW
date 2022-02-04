class UserDataBlock {
  constructor(container) {
    const el = document.createElement('p');
    el.innerHTML = 'User Data Block is run';
    container.appendChild(el);
  }
}

export default UserDataBlock;
