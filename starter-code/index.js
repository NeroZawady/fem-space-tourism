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
        .querySelector(`.destination__planet-image[data-planet="${planetButton.innerText}"]`)
        .classList.add('destination__planet-image--selected');

      document
        .querySelector('.destination__content-text--selected')
        .classList.remove('destination__content-text--selected');

      document
        .querySelector(`.destination__content-text[data-planet="${planetButton.innerText}"]`)
        .classList.add('destination__content-text--selected');

      document
        .querySelector('.destination__info--selected')
        .classList.remove('destination__info--selected');

      document
        .querySelector(`.destination__info[data-planet="${planetButton.innerText}"]`)
        .classList.add('destination__info--selected');
    }
  })
);

const navDotsButtons = document.querySelectorAll('.crew__nav-button');
navDotsButtons.forEach((button) =>
  button.addEventListener('click', () => {
    if (!button.classList.contains('destination__planet-button--selected')) {
      document
        .querySelector('.crew__nav-button--selected')
        .classList.remove('crew__nav-button--selected');
      button.classList.add('crew__nav-button--selected');

      document
        .querySelector('.crew__crewmate-image--selected')
        .classList.remove('crew__crewmate-image--selected');

      document
        .querySelector(
          `.crew__crewmate-image[data-crewmate="${button.getAttribute('data-crewmate')}"]`
        )
        .classList.add('crew__crewmate-image--selected');

      document
        .querySelector('.crew__crewmate-heading--selected')
        .classList.remove('crew__crewmate-heading--selected');

      document
        .querySelector(
          `.crew__crewmate-heading[data-crewmate="${button.getAttribute('data-crewmate')}"`
        )
        .classList.add('crew__crewmate-heading--selected');

      document
        .querySelector('.crew__crewmate-description--selected')
        .classList.remove('crew__crewmate-description--selected');

      document
        .querySelector(
          `.crew__crewmate-description[data-crewmate="${button.getAttribute('data-crewmate')}"`
        )
        .classList.add('crew__crewmate-description--selected');
    }
  })
);
