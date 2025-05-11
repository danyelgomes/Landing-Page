var menu = window.document.getElementsByTagName('nav')[0]
function openMenu() { 
var estilo = window.getComputedStyle(menu)
    if (estilo.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}