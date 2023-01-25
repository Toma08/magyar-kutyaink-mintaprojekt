//--kutyák testsúlyai--
const mini = [15, 24, 28, 31, 35, 38, 42, 45, 49, 52, 56, 59, 63, 66, 70, 74, 78, 82, 86, 90];

const kicsi = [15, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96];

const kozepes = [14, 23, 28, 33, 37, 42, 46, 51, 55, 60, 64, 69, 73, 78, 82, 87, 91, 96, 100, 105];

const nagy = [14, 22, 28, 34, 39, 45, 50, 56, 61, 67, 72, 78, 83, 89, 94, 100, 105, 111, 116, 122];

const oriasi = [12, 20, 28, 35, 43, 50, 58, 65, 73, 80, 88, 95, 103, 110, 118, 125];

//--év jelző--
let year = 1;
document.getElementById('year').innerHTML = year;

document.getElementById('slide').addEventListener('change', slide);
function slide() {
    year = document.getElementById('slide').value;
    document.getElementById('year').innerHTML = year;
}
//--óriási kutya undefined értékének elkerülése--
document.getElementById('fajta').addEventListener('change', fajta)
function fajta() {
    let h = document.querySelector('select').value
    if (h == 'oriasi') {
        document.getElementById('slide').setAttribute("max", "16")
    } else {
        document.getElementById('slide').setAttribute("max", "20")
    }
}

document.getElementById('fajta').addEventListener('click', tizenhat)
function tizenhat() {
    let b = document.getElementById('slide').value
    if (b > 16) {
        document.getElementById('ori').disabled = true
    } else {
        document.getElementById('ori').disabled = false
    }
}

//--select option szűrés--
const r = document.getElementById('result')
document.getElementById('btn').addEventListener('click', szures)
function szures() {

    let h = document.querySelector('select').value

    switch (h) {
        case 'placeholder':
            r.innerHTML = "Válassz méretet"
            break;
        case 'mini':
            r.innerHTML = `A kutyád átszámítva ${mini[year - 1]} éves.`
            break;
        case 'kicsi':
            r.innerHTML = `A kutyád átszámítva ${kicsi[year - 1]} éves.`
            break;
        case 'kozepes':
            r.innerHTML = `A kutyád átszámítva ${kozepes[year - 1]} éves.`
            break;
        case 'nagy':
            r.innerHTML = `A kutyád átszámítva ${nagy[year - 1]} éves.`
            break;
        case 'oriasi':
            r.innerHTML = `A kutyád átszámítva ${oriasi[year - 1]} éves.`
    }
}
//--link effekt--
document.getElementById("link").addEventListener("mouseover", line)
function line() {
    document.getElementById('line').style.transition = "0.5s"
    document.getElementById('line').style.width = "100%"
}
document.getElementById("link").addEventListener("mouseout", linee)
function linee() {
    document.getElementById('line').style.transition = "0.5s"
    document.getElementById('line').style.width = "0%"
}

document.getElementById("link2").addEventListener("mouseover", line2)
function line2() {
    document.getElementById('line2').style.transition = "0.5s"
    document.getElementById('line2').style.width = "100%"
}
document.getElementById("link2").addEventListener("mouseout", linee2)
function linee2() {
    document.getElementById('line2').style.transition = "0.5s"
    document.getElementById('line2').style.width = "0%"
}

