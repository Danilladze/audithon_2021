const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

const logo-img = document.querySelector('.logo-img')
window.addEventListener('scroll', fixLogo)
function fixLogo() {
    if(window.scrollY > logo-img.offsetHeight + 150) {
        logo-img.classList.add('active')
    } else {
        logo-img.classList.remove('active')
    }
}