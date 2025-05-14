var menu = window.document.getElementsByTagName('nav')[0]
var i = window.document.getElementById('icon')
i.addEventListener('click', openMenu)
 
var estilo = window.getComputedStyle(menu)
console.log(estilo)
function openMenu() {
    if (estilo.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}