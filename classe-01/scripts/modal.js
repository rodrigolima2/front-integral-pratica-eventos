const imagem = document.querySelectorAll('.galeria__imagem .img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal__img');
const prevArrow = document.querySelector('.modal__arrow--left');
const nextArrow = document.querySelector('.modal__arrow--right');
const modalBtnFechar = document.querySelector('.modal__btn-fechar');
const srcImagens = [];

let currentItem = 0;

for (i = 0; i < imagem.length; i++) {
    srcImagens[i] = imagem[i].src;
}

imagem.forEach((x, index) => {
    x.addEventListener('click', () => {
        if (x.src === srcImagens[0]) {
            prevArrow.classList.add('display--none');
        } else {
            prevArrow.classList.remove('display--none');
        }
        if (x.src === srcImagens[srcImagens.length - 1]) {
            nextArrow.classList.add('display--none');
        } else {
            nextArrow.classList.remove('display--none');
        }

        currentItem = index;
        modalImg.src = x.src;

        modal.classList.remove('display--none');
        addEventListener('keydown', (event) => {
            if (event.key !== 'Escape') return;
            modal.classList.add('display--none');
        });
        modal.addEventListener('click', () => {
            modal.classList.add('display--none');
        });
        modalBtnFechar.addEventListener('click', () => {
            modal.classList.add('display--none');
        });

        atualizarLikeModal();
    });
});

modalImg.addEventListener('click', (event) => {
    event.stopPropagation();
});

prevArrow.addEventListener('click', (event) => {
    event.stopPropagation();
    if (currentItem === 0) {
        return;
    }

    currentItem--;

    modalImg.src = srcImagens[srcImagens.indexOf(modalImg.src) - 1];
    if (modalImg.src === srcImagens[0]) {
        prevArrow.classList.add('display--none');
    }
    if (modalImg.src === srcImagens[srcImagens.length - 2]) {
        nextArrow.classList.remove('display--none');
    }

    atualizarLikeModal();
});

nextArrow.addEventListener('click', (event) => {
    event.stopPropagation();
    if (currentItem === srcImagens.length - 1) {
        return;
    }

    currentItem++;

    modalImg.src = srcImagens[srcImagens.indexOf(modalImg.src) + 1];
    if (modalImg.src === srcImagens[1]) {
        prevArrow.classList.remove('display--none');
    }
    if (modalImg.src === srcImagens[srcImagens.length - 1]) {
        nextArrow.classList.add('display--none');
    }

    atualizarLikeModal();
});