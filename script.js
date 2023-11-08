let scrollArray = document.querySelectorAll('[data-scroll]')
let themeArray = document.querySelectorAll('[data-theme]')
let themeButton = document.querySelector('#themeButton')

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        scrollArray.forEach((item) => item.setAttribute('data-scroll', 'active'))
    } else {
        scrollArray.forEach((item) => item.setAttribute('data-scroll', 'default'))
    }
})

themeButton.addEventListener('click', () => {
    themeArray.forEach((item) => {
        if (item.getAttribute('data-theme') == 'light') {
            item.setAttribute('data-theme', 'dark')
        } else {
            item.setAttribute('data-theme', 'light')
        }
    })
})