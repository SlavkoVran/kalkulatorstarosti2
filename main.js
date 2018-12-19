
function izracunaj() {
let rodjendan = document.getElementById("unos").value;
    let datumRodjenja = new Date(rodjendan);
    let danRodjenja = datumRodjenja.getDate();
    let mesecRodjenja = datumRodjenja.getMonth();
    let godinaRodjenja = datumRodjenja.getFullYear();

    let trenutno = new Date();
    let trenutnoDan = trenutno.getDate();
    let trenutnoMesec = trenutno.getMonth();
    let trenutnoGodina = trenutno.getFullYear();

    let milisekunda = (1000 * 60 * 60 *24);

    datumRodjenjaM = datumRodjenja / milisekunda;
    trenutnoM = trenutno / milisekunda;

    uDanima = Math.floor((trenutno - datumRodjenja) / milisekunda);
    uGodinama = Math.floor((uDanima / 365));
    uMesecima = Math.floor(uGodinama * 12);

    console.log("DAn", datumRodjenjaM);
    console.log("DAn", trenutnoM);
    console.log("DAn", uDanima, uGodinama, uMesecima);


    document.getElementById('godina').value = uGodinama;
    document.getElementById('mesec').value =  uMesecima;
    document.getElementById('dan').value =  uDanima;

}

document.getElementById("dugme").addEventListener("click", izracunaj);


