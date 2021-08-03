const menuLateral = document.querySelector('.menu-lateral');
const itemH2 = document.querySelectorAll('.menu-lateral__item h2');
const imagens = document.querySelectorAll('.menu-lateral img');

imagens[0].addEventListener('click', abrirMenu);

function abrirMenu() {
    imagens[0].src = '../../assets/open-menu.svg';
    menuLateral.classList.add('menu-lateral__active');
    itemH2.forEach(x => {
        x.classList.remove('display--none');
    })
    imagens[0].removeEventListener('click', abrirMenu);
    imagens[0].addEventListener('click', fecharMenu);
}

function fecharMenu() {
    imagens[0].src = '../../assets/closed-menu.svg';
    itemH2.forEach(x => {
        x.classList.add('display--none');
    })
    menuLateral.classList.remove('menu-lateral__active');
    imagens[0].removeEventListener('click', fecharMenu);
    imagens[0].addEventListener('click', abrirMenu);
}