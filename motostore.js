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


// Обработчик клика по всему документу
document.addEventListener('click', (e) => {
    // 1. Проверяем, открыто ли меню
    // 2. Проверяем, что клик был НЕ по меню (nav)
    // 3. Проверяем, что клик был НЕ по кнопке открытия (bmenu)
    if (nav.classList.contains('open') && !nav.contains(e.target) && !bmenu.contains(e.target)) {
        nav.classList.remove('open');
    }
});