var icon = document.getElementById('icon');

icon.onclick = function() {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')) {
        icon.src = "/Dark Mode Website/images/sun.png";
    } else {
        icon.src = "/Dark Mode Website/images/moon.png";
    }
}