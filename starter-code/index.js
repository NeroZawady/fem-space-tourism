const sidebarButton = document.querySelector('.header__menu-button');
const sidebar = document.querySelector('.header__nav');
sidebarButton.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
  sidebarButton.children[0].classList.toggle('hidden');
  sidebarButton.children[1].classList.toggle('hidden');
});

const sidebarLinks = document.querySelectorAll('.header__link');
sidebarLinks.forEach((sidebarLink) =>
  sidebarLink.addEventListener('click', () => {
    sidebarButton.click();
  })
);

const destinationButtons = document.querySelectorAll('.destination__planet-button');
destinationButtons.forEach((destinationButton) =>
  destinationButton.addEventListener('click', () => {
    if (!destinationButton.classList.contains('destination__planet-button--selected')) {
      document
        .querySelector('.destination__planet-button--selected')
        .classList.remove('destination__planet-button--selected');
      destinationButton.classList.add('destination__planet-button--selected');

      document
        .querySelector('.destination__planet-image--selected')
        .classList.remove('destination__planet-image--selected');

      document
        .querySelector(`.destination__planet-image[data-planet="${destinationButton.innerText}"]`)
        .classList.add('destination__planet-image--selected');

      document
        .querySelector('.destination__content-text--selected')
        .classList.remove('destination__content-text--selected');

      document
        .querySelector(`.destination__content-text[data-planet="${destinationButton.innerText}"]`)
        .classList.add('destination__content-text--selected');

      document
        .querySelector('.destination__info--selected')
        .classList.remove('destination__info--selected');

      document
        .querySelector(`.destination__info[data-planet="${destinationButton.innerText}"]`)
        .classList.add('destination__info--selected');
    }
  })
);

const crewButtons = document.querySelectorAll('.crew__nav-button');
crewButtons.forEach((crewButton) =>
  crewButton.addEventListener('click', () => {
    if (!crewButton.classList.contains('crew__nav-button--selected')) {
      document
        .querySelector('.crew__nav-button--selected')
        .classList.remove('crew__nav-button--selected');
      crewButton.classList.add('crew__nav-button--selected');

      document
        .querySelector('.crew__crewmate-image--selected')
        .classList.remove('crew__crewmate-image--selected');

      document
        .querySelector(
          `.crew__crewmate-image[data-crewmate="${crewButton.getAttribute('data-crewmate')}"]`
        )
        .classList.add('crew__crewmate-image--selected');

      document
        .querySelector('.crew__crewmate-heading--selected')
        .classList.remove('crew__crewmate-heading--selected');

      document
        .querySelector(
          `.crew__crewmate-heading[data-crewmate="${crewButton.getAttribute('data-crewmate')}"`
        )
        .classList.add('crew__crewmate-heading--selected');

      document
        .querySelector('.crew__crewmate-description--selected')
        .classList.remove('crew__crewmate-description--selected');

      document
        .querySelector(
          `.crew__crewmate-description[data-crewmate="${crewButton.getAttribute('data-crewmate')}"`
        )
        .classList.add('crew__crewmate-description--selected');
    }
  })
);

const technologyButtons = document.querySelectorAll('.technology__nav-button');
technologyButtons.forEach((technologyButton) =>
  technologyButton.addEventListener('click', () => {
    if (!technologyButton.classList.contains('technology__nav-button--selected')) {
      document
        .querySelector('.technology__nav-button--selected')
        .classList.remove('technology__nav-button--selected');
      technologyButton.classList.add('technology__nav-button--selected');

      document
        .querySelector('.technology__image--selected')
        .classList.remove('technology__image--selected');

      document
        .querySelector(
          `.technology__image[data-technology="${technologyButton.getAttribute(
            'data-technology'
          )}"]`
        )
        .classList.add('technology__image--selected');

      document
        .querySelector('.technology__tech-heading--selected')
        .classList.remove('technology__tech-heading--selected');

      document
        .querySelector(
          `.technology__tech-heading[data-technology="${technologyButton.getAttribute(
            'data-technology'
          )}"`
        )
        .classList.add('technology__tech-heading--selected');

      document
        .querySelector('.technology__description--selected')
        .classList.remove('technology__description--selected');

      document
        .querySelector(
          `.technology__description[data-technology="${technologyButton.getAttribute(
            'data-technology'
          )}"`
        )
        .classList.add('technology__description--selected');
    }
  })
);
