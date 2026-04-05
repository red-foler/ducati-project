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








