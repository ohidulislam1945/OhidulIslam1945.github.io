// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hero Slider (Swiper)
const heroSlider = new Swiper('.hero-slider', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});

// AOS Animation Init
AOS.init({
    duration: 1200,
    once: true
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Load Theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Admin Panel Access & Functionality
if (window.location.hash === '#admin') {
    document.getElementById('admin').style.display = 'block';
}

document.getElementById('admin-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Save to localStorage
    localStorage.setItem('logo', this.logo.value);
    localStorage.setItem('slide1-title', this['slide1-title'].value);
    localStorage.setItem('slide1-subtitle', this['slide1-subtitle'].value);
    localStorage.setItem('slide2-title', this['slide2-title'].value);
    localStorage.setItem('slide2-subtitle', this['slide2-subtitle'].value);
    localStorage.setItem('slide3-title', this['slide3-title'].value);
    localStorage.setItem('slide3-subtitle', this['slide3-subtitle'].value);
    localStorage.setItem('about-photo', this['about-photo'].value);
    localStorage.setItem('about-bio', this['about-bio'].value);
    localStorage.setItem('facebook-link', this['facebook-link'].value);
    localStorage.setItem('linkedin-link', this['linkedin-link'].value);
    localStorage.setItem('upwork-link', this['upwork-link'].value);
    
    alert('সব চেঞ্জ সেভ হয়েছে! পেজ রিলোড করো।');
    window.location.hash = '';
    window.location.reload();
});

// Load Saved Data from localStorage
window.addEventListener('load', () => {
    if (localStorage.getItem('logo')) document.getElementById('logo').innerText = localStorage.getItem('logo');
    
    if (localStorage.getItem('slide1-title')) document.getElementById('slide1-title').innerText = localStorage.getItem('slide1-title');
    if (localStorage.getItem('slide1-subtitle')) document.getElementById('slide1-subtitle').innerText = localStorage.getItem('slide1-subtitle');
    if (localStorage.getItem('slide2-title')) document.getElementById('slide2-title').innerText = localStorage.getItem('slide2-title');
    if (localStorage.getItem('slide2-subtitle')) document.getElementById('slide2-subtitle').innerText = localStorage.getItem('slide2-subtitle');
    if (localStorage.getItem('slide3-title')) document.getElementById('slide3-title').innerText = localStorage.getItem('slide3-title');
    if (localStorage.getItem('slide3-subtitle')) document.getElementById('slide3-subtitle').innerText = localStorage.getItem('slide3-subtitle');
    
    if (localStorage.getItem('about-photo')) document.getElementById('about-photo').src = localStorage.getItem('about-photo');
    if (localStorage.getItem('about-bio')) document.getElementById('about-bio').innerText = localStorage.getItem('about-bio');
    
    if (localStorage.getItem('facebook-link')) document.getElementById('facebook-link').href = localStorage.getItem('facebook-link');
    if (localStorage.getItem('linkedin-link')) document.getElementById('linkedin-link').href = localStorage.getItem('linkedin-link');
    if (localStorage.getItem('upwork-link')) document.getElementById('upwork-link').href = localStorage.getItem('upwork-link');
});

// Contact Form Alert (Temporary - পরে EmailJS যোগ করব)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this[0].value.trim();
    if (name && this[1].value && this[2].value) {
        alert('ধন্যবাদ ' + name + '! তোমার মেসেজ পাঠানো হয়েছে। আমি শিগগিরই যোগাযোগ করব।');
        this.reset();
    } else {
        alert('দয়া করে সব ফিল্ড পূরণ করো।');
    }
}); 
