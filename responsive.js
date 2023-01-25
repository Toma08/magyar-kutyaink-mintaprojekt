//--menü ikon--
let b = false

document.getElementById('menu-btn').addEventListener('click', menu)
function menu() {
    if (b == false) {
        document.getElementById('links').style.display = "flex";
        document.getElementById('links').style.opacity = "1";
        b = true;
    } else {
        document.getElementById('links').style.display = "none";
        b = false
    }
}


