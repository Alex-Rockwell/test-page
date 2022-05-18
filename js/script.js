import {toggleTabs} from './toggleTabs.js'
import {openModals} from './openModals.js'
import {openAccordion} from './openAccordion.js'
import {toggleBurgerMenu} from './toggleBurgerMenu.js'

document.addEventListener('DOMContentLoaded', () => {
  toggleTabs()
  openModals()
  openAccordion()
  toggleBurgerMenu()

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

  // Отправка данных на сервер
  function send(event, php){
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    let req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
      if (req.status >= 200 && req.status < 400) {
      json = JSON.parse(this.response);
          console.log(json);
            
          // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
          if (json.result == "success") {
            // Если сообщение отправлено
            alert("Сообщение отправлено");
          } else {
            // Если произошла ошибка
            alert("Ошибка. Сообщение не отправлено");
          }
        // Если не удалось связаться с php файлом
        } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
    
    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
  }

})

