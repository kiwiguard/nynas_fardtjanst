// Mobile-menu scripts
var navList = document.getElementById('mobile-nav-list');
var button = document.getElementById('mobile-menu-btn')

// function openNav() {
//     document.getElementById("mobile-nav").style.width = "100%";
//     document.getElementById("main").style.display = "none";
// }

// function closeNav() {
//     document.getElementById("mobile-nav").style.width = "0";
//     document.getElementById("main").style.display = "block";
// }

function openNav() {
    document.getElementById("mobile-nav").style.width = "100%";
    document.getElementById("main").style.display = "none";
    document.getElementById("mobile-nav").setAttribute('aria-expanded', true);
}

function closeNav() {
    document.getElementById("mobile-nav").style.width = "0";
    document.getElementById("main").style.display = "block";
    document.getElementById("mobile-nav").setAttribute('aria-expanded', false);
}
