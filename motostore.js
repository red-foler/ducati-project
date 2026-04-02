document.addEventListener("DOMContentLoaded", () => {
            const slides = document.querySelectorAll('.slide');
            let current = 0;
            if(slides.length > 0){
                setInterval(() => {
                    slides[current].classList.remove('active');
                    current = (current + 1) % slides.length;
                    slides[current].classList.add('active');
                }, 6000);
            }
        })

const bmenu = document.querySelector('.bmenu');
const nav = document.querySelector('.nav');
bmenu.addEventListener('click', ()=>{
    nav.classList.toggle('open');
})
document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !bmenu.contains(e.target)) {
        nav.classList.remove('open');
    }
});








