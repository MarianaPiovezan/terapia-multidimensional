
/* Menu abrir e fechar */

const botaoMenu = document.querySelector('.icon-menu');
const navMenu = document.querySelector('.nav-menu');

botaoMenu.addEventListener('click', () => { botaoMenu.classList.toggle('active'); 
navMenu.classList.toggle('active');});


/* Fechar menu quando clicar em um link*/

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => { 
    botaoMenu.classList.remove('active');
    navMenu.classList.remove('active');
}))



/* depoimentos slider / carousel / swiper*/

/*

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

  */

  /* accordion ou collapse */

let acc = document.getElementsByClassName("box-pergunta");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}