let menu = window.document.getElementsByTagName('nav')[0]
var i = window.document.getElementById('icon')
i.addEventListener('click', openMenu)
 
let estilo = window.getComputedStyle(menu)

function openMenu() {
    if (estilo.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
    i.src = ''
}