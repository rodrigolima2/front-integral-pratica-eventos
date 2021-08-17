const modalLike = document.querySelector('.modal .modal__like');

let likedImages = [];

modalImg.addEventListener('dblclick', (event) => {
    const itemLike = imagem[currentItem].previousElementSibling;

    if (likedImages.includes(currentItem)) {
        likedImages = likedImages.filter((likedImage) => {
            return likedImage !== currentItem;
        });
        modalLike.classList.add('display--none');
        itemLike.classList.add('display--none');
    } else {
        likedImages.push(currentItem);
        modalLike.classList.remove('display--none');
        itemLike.classList.remove('display--none');
    }
});

function atualizarLikeModal() {
    if (likedImages.includes(currentItem)) {
        modalLike.classList.remove('display--none');
    } else {
        modalLike.classList.add('display--none');
    }
}