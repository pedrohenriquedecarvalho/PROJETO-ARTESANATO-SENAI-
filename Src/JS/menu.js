let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('mobile-menu');
let overlay = document.getElementById('overlaymenu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abra-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abra-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abra-menu')
})