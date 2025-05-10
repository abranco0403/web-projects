const container = document.querySelector('.container');
const signUpBtn =  document.querySelector('.btn-greenBg');

signUpBtn.addEventListener('click', () => {
    container.classList.toggle('change');
});