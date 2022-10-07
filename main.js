/* Menu abrir e fechar */

const botaoMenu = document.querySelector('.icon-menu');
const navMenu = document.querySelector('.nav-menu');

botaoMenu.addEventListener('click', () => { botaoMenu.classList.toggle('active'); 
navMenu.classList.toggle('active');});


/* Fechar menu quando clicar em um link*/

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => { 
    botaoMenu.classList.remove('active');
    navMenu.classList.remove('active');
}));



/* depoimentos slider / carousel / swiper*/

const containerSwiper = [...document.querySelectorAll('.swiper')];
const nextBtn = [...document.querySelectorAll('.btn-next')];
const prevBtn = [...document.querySelectorAll('.btn-prev')];

containerSwiper.forEach((item, i) => {
  let containerDimension = item.getBoundingClientRect();
  let containerWidth = containerDimension.width;

  nextBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  prevBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
   })

})

/* accordion ou collapse */

let acc = document.getElementsByClassName("box-pergunta");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

/* Scrool reveal conforme scrool a página*/

// const scrollReveal = ScrollReveal({
//   origin: 'top',
//   distance: "60px",
//   duration: 700,
//   reset: true
// })

// scrollReveal.reveal(
//   `#inicio .image, #inicio .text ,
//   #terapia, #terapia .terapia-destaque .text, #terapia .container-beneficios , #terapia .container-beneficios h3, #terapia .container-beneficios .card, #sobre, #sobre .container-relative, #sobre .sobre-perfil, #sobre .perfil-descricao, #depoimentos, #depoimentos h1, #depoimentos .swiper , #duvidas, #duvidas h1, #duvidas .box-pergunta, #contato, #contato h1, #contato .text, #contato .links, #contato .button, #footer, #footer .logo, #footer div p, #footer .social`,
//   { interval: 1 }
