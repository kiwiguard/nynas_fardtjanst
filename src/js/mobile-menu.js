// Mobile-menu scripts
var navList = document.getElementById('mobile-nav-list');
var button = document.getElementById('mobile-menu-btn')

button.addEventListener('click', function() {
    if (navList.classList.contains('is-active')) {
        this.setAttribute('aria-expanded', false);
        navList.classList.remove('is-active');
    } else {
        navList.classList.add('is-active');
        this.setAttribute('aria-expanded', 'true');
    }
});