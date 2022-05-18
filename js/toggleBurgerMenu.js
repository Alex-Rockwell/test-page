function   toggleBurgerMenu() {
    let body = document.querySelector('body')
    let burger = document.querySelector('.header__burger')
    let navContainer = document.querySelector('.header__nav-container')

    burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger--active')
    navContainer.classList.toggle('header__nav-container--active')
    body.classList.toggle('noscroll')
    })
}

export {toggleBurgerMenu}