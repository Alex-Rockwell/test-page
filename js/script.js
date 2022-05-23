import {toggleTabs} from './toggleTabs.js'
import {openModals} from './openModals.js'
import {openAccordion} from './openAccordion.js'
import {toggleBurgerMenu} from './toggleBurgerMenu.js'
import {sendForm} from './sendForm.js'

document.addEventListener('DOMContentLoaded', () => {
  toggleTabs()
  openModals()
  openAccordion()
  toggleBurgerMenu()
  sendForm()

  new Splide( '.splide', {
    type: 'loop',
    perPage: 6,
    breakpoints: {
      1440: {
        perPage: 5,
      },
      960: {
        perPage: 4,
      },
      650: {
        perPage: 3,
      },
      530: {
        perPage: 2,
      }
    },
    perMove: 1,
    speed: 1000,
    pagination: false,
    classes: {
      arrows: 'splide__arrows',
      arrow : 'splide__arrow change-arrow',
      prev  : 'splide__arrow--prev',
      next  : 'splide__arrow--next',
  },
  } ).mount();


})

