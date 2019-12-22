const toggles = document.querySelectorAll('#navToggle');
const body = document.querySelector('body');

window.addEventListener("scroll", function(event) {

    if (window.scrollY > 0) {
        document.querySelector('#header').classList.add('header__inner--scroll');
        document.querySelector('.logo__black').classList.remove('logo--active');
        document.querySelector('.logo__white').classList.add('logo--active');
    } else {
        document.querySelector('#header').classList.remove('header__inner--scroll');
        document.querySelector('.logo__white').classList.remove('logo--active');
        document.querySelector('.logo__black').classList.add('logo--active');
    }
})



for (const toggle of toggles) {
    toggle.addEventListener("click", function(event) {

        event.preventDefault();
        if (!document.querySelector('.nav--active')) {
            document.querySelector('.nav').classList.add('nav--active');
        } else {
            document.querySelector('.nav--active').classList.remove('nav--active');

        }
    })
}