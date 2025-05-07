const  btnTrailer = document.querySelector('.btn-trailer');
const closeVideo = document.querySelector('.close-video');
const videoArea = document.querySelector('.video-area');

btnTrailer.addEventListener('click', () => {
    videoArea.classList.add('d-block');
    closeVideo.classList.add('d-block');
});

closeVideo.addEventListener('click', () => {
    videoArea.classList.remove('d-block');
    closeVideo.classList.remove('d-block');
});