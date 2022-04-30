const headerMenuButton = document.querySelector('.header__menu-button');
const headerNav = document.querySelector('.header__nav');

headerMenuButton.addEventListener('click', () => {
  headerNav.classList.toggle('hidden');
  headerMenuButton.children[0].classList.toggle('hidden');
  headerMenuButton.children[1].classList.toggle('hidden');
});
