function intToFarve(i) {
    switch (i) {
        case 0: return 'kloer';
        case 1: return 'spar';
        case 2: return 'hjerter';
        case 3: return 'ruder';
    }
}
let statistik = { "kloer": 0, "spar": 0, "hjerter": 0, "ruder": 0 };
function visNytKort() {
    let kort = nytKort();
    document.querySelector("#kort").value = kort.farve + kort.vaerdi;
}
function nytKort() {
    let vaerdi = Math.floor(Math.random() * 14);
    let farve = intToFarve(Math.floor(Math.random() * 4));
    statistik[farve] = statistik[farve] + 1;
    visStatistik();
    return { vaerdi: vaerdi, farve: farve };
}
function visStatistik() {
    document.querySelector("#kloer").value = statistik["kloer"];
    document.querySelector("#spar").value = statistik["spar"];
    document.querySelector("#hjerter").value = statistik["hjerter"];
    document.querySelector("#ruder").value = statistik["ruder"];
}

//lav nedenstående click-metode for visningsfelter
function nulstil(event) {
    event.target.value = "0";
    statistik[event.target.id] = 0;
}

document.querySelector("#nytKortButton").onclick = visNytKort;

let statistikvisning = document.querySelectorAll(".statistikfelt");
for (let element of statistikvisning) {
    element.onclick = nulstil;
}
// document.querySelector("#kloer").onclick=nulstil;
