const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const sectionOneLogo = document.querySelector('.section-1 .logo');
    const sectionTwo = document.querySelector('.section-2');
    const sectionThree = document.querySelector('.section-3');
    const sectionFour = document.querySelector('.section-4');
    const sectionFive = document.querySelector('.section-5');
    const footer = document.querySelector('.footer');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')

        for (let link of navLinks) {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards 0.5s`
            }
        }
        burger.classList.toggle('toggle');
        sectionOneLogo.classList.toggle('blur');
        sectionTwo.classList.toggle('blur');
        sectionThree.classList.toggle('blur');
        sectionFour.classList.toggle('blur');
        sectionFive.classList.toggle('blur');
        footer.classList.toggle('blur');
    });
}
navSlide();