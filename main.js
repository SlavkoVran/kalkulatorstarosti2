
function izracunaj() {
let rodjendan = document.getElementById("unos").value;
    let datumRodjenja = new Date(rodjendan);
    let trenutno = new Date();
    let milisekunda = (1000 * 60 * 60 *24);

    datumRodjenjaM = datumRodjenja / milisekunda;
    trenutnoM = trenutno / milisekunda;

    uDanima = Math.floor((trenutno - datumRodjenja) / milisekunda);
    uGodinama = Math.floor((uDanima / 365));
    uMesecima = Math.floor(uGodinama * 12);

    document.getElementById('godina').value = uGodinama;
    document.getElementById('mesec').value =  uMesecima;
    document.getElementById('dan').value =  uDanima;

}

document.getElementById("dugme").addEventListener("click", izracunaj);


