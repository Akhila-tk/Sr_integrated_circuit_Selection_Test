
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const sideNav = document.getElementById('side-nav');
const menuItem = document.getElementById('menu-item');
const submenu = document.getElementById('submenu');

// Open the side navigation
menuIcon.addEventListener('click', function() {
    sideNav.classList.add('open');
});

// Close the side navigation
closeIcon.addEventListener('click', function() {
    sideNav.classList.remove('open');
    submenu.classList.remove('open');  // Close submenu when side nav is closed
});

// Toggle the submenu when "Menu" is clicked
menuItem.addEventListener('click', function() {
    submenu.classList.toggle('open');
});

