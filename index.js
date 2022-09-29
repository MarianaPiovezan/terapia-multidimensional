

const botaoMenu = document.querySelector('.icon-menu');
const navMenu = document.querySelector('.nav-menu');

botaoMenu.addEventListener('click', () => { botaoMenu.classList.toggle('active'); 
navMenu.classList.toggle('active');});



document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => { 
    botaoMenu.classList.remove('active');
    navMenu.classList.remove('active');
}))

/* testimonials slider / carousel / swiper*/



let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    navigation: {
      nextEl: ".icon-right-arrow",
      prevEl: ".icon-left-arrow",
    },
    breakpoints: {
        767: {
          slidesPerView: 2,
          setWrapperSize: true
        }
    }
  });