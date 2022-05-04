const headerMenuButton = document.querySelector('.header__menu-button');
const headerNav = document.querySelector('.header__nav');
headerMenuButton.addEventListener('click', () => {
  headerNav.classList.toggle('hidden');
  headerMenuButton.children[0].classList.toggle('hidden');
  headerMenuButton.children[1].classList.toggle('hidden');
});

const headerLinks = document.querySelectorAll('.header__link');
headerLinks.forEach((headerLink) =>
  headerLink.addEventListener('click', () => {
    headerMenuButton.click();
  })
);

const destination__planetButtons = document.querySelectorAll('.destination__planet-button');
destination__planetButtons.forEach((planetButton) =>
  planetButton.addEventListener('click', () => {
    if (!planetButton.classList.contains('destination__planet-button--selected')) {
      document
        .querySelector('.destination__planet-button--selected')
        .classList.remove('destination__planet-button--selected');
      planetButton.classList.add('destination__planet-button--selected');

      document
        .querySelector('.destination__planet-image--selected')
        .classList.remove('destination__planet-image--selected');

      document
        .querySelector(`.destination__planet-image[data-planet="${planetButton.innerText}"`)
        .classList.add('destination__planet-image--selected');

      document
        .querySelector('.destination__content-text--selected')
        .classList.remove('destination__content-text--selected');

      document
        .querySelector(`.destination__content-text[data-planet="${planetButton.innerText}"`)
        .classList.add('destination__content-text--selected');

      document
        .querySelector('.destination__info--selected')
        .classList.remove('destination__info--selected');

      document
        .querySelector(`.destination__info[data-planet="${planetButton.innerText}"`)
        .classList.add('destination__info--selected');
    }
  })
);
