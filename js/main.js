let menuBtn = document.getElementById('menu-btn'),
    menu =document.getElementById('nav-links') 

menuBtn.addEventListener('click', function(){
    if(menu.style.opacity == '0'){
        menu.style.opacity = '1'
    }else{
        menu.style.opacity = '0'
    }
})