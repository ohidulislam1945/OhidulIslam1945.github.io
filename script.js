// Typed.js for Hero
var typed = new Typed('#typed', {
    strings: ['Ohidul Islam', 'SEO Expert', 'Marketing Guru'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Stats Count Up
const stats = document.querySelectorAll('[data-target]');
const speed = 200;
stats.forEach(stat => {
    const updateCount = () => {
        const target = +stat.getAttribute('data-target');
        const count = +stat.innerText;
        const inc = target / speed;
        if (count < target) {
            stat.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            stat.innerText = target;
        }
    };
    updateCount();
});

// Other code as before (Smooth Scroll, Theme Toggle, Admin, EmailJS)
 
