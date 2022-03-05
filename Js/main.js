let menu= document.querySelector('.menu-icon');
let nav=document.querySelector('.menu');
let notification= document.querySelector('.notification');
menu.onclick=()=>{
    nav.classList.toggle('active');
    menu.classList.toggle('move');
    notification.classList.remove('active');

}

document.querySelector('#bell-icon').onclick =()=>{
    notification.classList.toggle('active');
}

var swiper = new Swiper(".trending-content", {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });