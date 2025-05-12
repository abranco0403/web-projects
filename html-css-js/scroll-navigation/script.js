const boxesLeft = document.querySelectorAll('.box-left');
const boxesRight = document.querySelectorAll('.box-right');
const header =  document.querySelector('.header');

function sectionContents() {
    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight / 5 * 4;
    
        for(let boxRight of boxesRight) {
            let boxTop = boxRight.getBoundingClientRect().top;
            if(boxTop < triggerBottom) {
                boxRight.classList.add('show');
            }
            else {
                boxRight.classList.remove('show');
            }
        }
        for(let boxLeft of boxesLeft) {
            let boxTop = boxLeft.getBoundingClientRect().top;
            if(boxTop < triggerBottom) {
                boxLeft.classList.add('show');
            }
            else {
                boxLeft.classList.remove('show');
            }
        }
    });
}
sectionContents();
