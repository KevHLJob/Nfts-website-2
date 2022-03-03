let menu= document.querySelector('.menu-icon');
let nav=document.querySelector('.menu');
menu.onclick=()=>{
    nav.classList.toggle('active');
    menu.classList.toggle('move');
}