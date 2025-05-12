const leftSide = document.querySelector('.left');
const rightSide = document.querySelector('.right');
const container = document.querySelector('.container');

/*Left Side*/
leftSide.addEventListener('mouseenter', ()=> container.classList.add('hover-left'));
leftSide.addEventListener('mouseleave', ()=> container.classList.remove('hover-left'));

/*Right Side*/
rightSide.addEventListener('mouseenter', ()=> container.classList.add('hover-right'));
rightSide.addEventListener('mouseleave', ()=> container.classList.remove('hover-right'));