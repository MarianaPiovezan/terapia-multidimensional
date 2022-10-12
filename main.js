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


const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidePerView: 1,
  loop: true,
  mousewheel: true,
  keyboard: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});


/* accordion ou collapse */



let acc = document.getElementsByClassName("box-pergunta");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}


/* Menu ativo conforme a seçao na página*/

const sections = document.querySelectorAll(`section`);
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener("scroll", () => { 
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if ( scrollY >= (sectionTop - sectionHeight/4)) {
      current = section.getAttribute('id');
    }
  })
  navLi.forEach(li => {
    li.classList.remove('active');
    if (li.classList.contains(current)){
      li.classList.add('active');
    }  
  })
})
