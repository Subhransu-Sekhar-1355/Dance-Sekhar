// scripts.js
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

document.getElementById('contact-button').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'contact.html';
});

