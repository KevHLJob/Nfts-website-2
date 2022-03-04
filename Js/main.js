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