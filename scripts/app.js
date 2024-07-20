const $=document

const buttonMenuMobile=$.querySelector('.icon-menu')

const menuMobile=$.querySelector('.menu-mobile')

buttonMenuMobile.addEventListener('click',event=>{
    menuMobile.classList.toggle('menu-mobile__active')
})

window.addEventListener('scroll',event=>{
    if(menuMobile.className.includes('menu-mobile__active')){
        menuMobile.classList.remove('menu-mobile__active')
    }
})