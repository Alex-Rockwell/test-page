
document.addEventListener('DOMContentLoaded', () => {

  ////////////////////////////// Tabs //////////////////////////////////////

  let tablinks = document.querySelectorAll('.prices__tablinks')
  let tabcontent = document.querySelectorAll('.tabcontent')

  tablinks.forEach(tablink => {
    tablink.addEventListener('click', function(e){
      e.preventDefault();
      let activeTabAttr = e.target.getAttribute('data-tab');
  
      for (let i = 0; i < tablinks.length; i++) {
        let contentAttr = tabcontent[i].getAttribute('data-tab-content')
  
        if (activeTabAttr === contentAttr) {
          tablinks[i].classList.add('active')
          tabcontent[i].classList.add('active')
        } else {
          tablinks[i].classList.remove('active')
          tabcontent[i].classList.remove('active')
        }
      }
    })
  })

  ////////////////////////////// Modal Windows //////////////////////////////////////
  
  let buttons = document.querySelectorAll('[data-model-btn]')
  let modals =  document.querySelectorAll('[data-modal-window]')
  let overlay =  document.querySelector('.overlay')
  let closeButtons = document.querySelectorAll('.close-button')
  let currentModal
  let currentButton
  
  buttons.forEach(el => {
    el.addEventListener('click', showModal)
  })
  
  function showModal(e) {
    let btnNum = e.currentTarget.getAttribute('data-model-btn')
    modals.forEach(el => {
      wNum = el.getAttribute('data-modal-window')
      if (btnNum == wNum) {
        el.classList.add('active')
        currentModal = el
        closeButtons[wNum - 1].addEventListener('click', hideModal) 
        overlay.addEventListener('click', hideModal)
      }
    })
    overlay.classList.add('active')
  }
  
  function hideModal() {
    currentModal.classList.remove('active')
    overlay.classList.remove('active')
  }
  
  /////////////////////////// Accordion ////////////////////////////////
  
  const title = document.querySelector('.time__arrow')
  const contentBlock = document.querySelector('.time__content')
  
  title.addEventListener('click', function() {
    contentBlock.classList.toggle('time__content--active')
    title.classList.toggle('time__arrow--active')
  })


})



