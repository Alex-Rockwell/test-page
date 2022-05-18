const openModals = () => {
    let buttons = document.querySelectorAll('[data-model-btn]')
    let modals =  document.querySelectorAll('[data-modal-window]')
    let overlay =  document.querySelector('.overlay')
    let closeButtons = document.querySelectorAll('.close-button')
    let currentModal
    let body = document.querySelector('body')
    // let currentButton
    
    buttons.forEach(el => {
      el.addEventListener('click', showModal)
    })
    
    function showModal(e) {
      let btnNum = e.currentTarget.getAttribute('data-model-btn')
      modals.forEach(el => {
        let wNum = el.getAttribute('data-modal-window')
        if (btnNum == wNum) {
          el.classList.add('active')
          body.classList.add('noscroll')
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
      body.classList.remove('noscroll')
    }
}

export {openModals}