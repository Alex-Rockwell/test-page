const openAccordion = () => {
    const title = document.querySelector('.time__arrow')
    const contentBlock = document.querySelector('.time__content')
    
    title.addEventListener('click', function() {
      contentBlock.classList.toggle('time__content--active')
      title.classList.toggle('time__arrow--active')
    })
}

export {openAccordion}