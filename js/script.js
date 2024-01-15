document.addEventListener('DOMContentLoaded', init)

function init() {

    // Burger
    let burger = document.querySelector('.header__burger'),
        menu = document.querySelector('.header__menu');
    const menuLinks = document.querySelectorAll('.header__menu-link');
    
    burger.addEventListener('click', event => {
        document.body.classList.toggle('lock');
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    })

    menuLinks.forEach(link => {
        link.addEventListener('click', event => {
          document.body.classList.remove('lock');
          burger.classList.remove('active');
          menu.classList.remove('active');
        })
    })

    //Fixed header
    let header = document.querySelector('.header');
    let headerHeight = header.offsetHeight;
    let headerLink = document.querySelector('.header__link');

    window.onscroll = function(){
        if (window.pageYOffset >= headerHeight) {
            header.classList.add('scrolled');
          menuLinks.forEach(item => {
            item.classList.add('scrolled');
          })
          headerLink.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
          menuLinks.forEach(item => {
            item.classList.remove('scrolled');
          })
          headerLink.classList.remove('scrolled');
        }
    };
}