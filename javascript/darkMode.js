function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if (sessionStorage.getItem('darkMode', false)) {
        sessionStorage.setItem('darkMode', true)
    } else {
        sessionStorage.setItem('darkMode', false)
    }
}
function toggleButtonStyle() {
    var element = document.getElementById("modeButton");
    element.classList.toggle("modeButtonStyle");
}
function changeListColor() {
    var element = document.body;
    element.classList.toggle('listColor');
}

fetch('darkMode.json')
.then(response => response.json())
.then(json => {
    console.log(json);
})