function activeButton() {
    var element = document.getElementByID("modeButton");
    element.classList.add("active");
}

document.querySelector('.active').addEventListener('hover', () => {
    element.classList.remove('active')
})