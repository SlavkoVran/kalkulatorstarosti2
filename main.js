
function izracunaj() {
let rodjendan = document.getElementById("unos").value;
    let datumRodjenja = new Date(rodjendan);
    let trenutno = new Date();
    let milisekunda = (1000 * 60 * 60 *24);
    let godineP;

    datumRodjenjaM = datumRodjenja / milisekunda;
    trenutnoM = trenutno / milisekunda;

    uDanima = Math.floor((trenutno - datumRodjenja) / milisekunda);
    uGodinama = Math.floor((uDanima / 365));
    uMesecima = Math.floor(uGodinama * 12);
    novaG = String(uGodinama);
    novaM = String(uMesecima);
    novaD = String(uDanima)
    
console.log(typeof novaG)
  switch (novaG[1]) {
    case "1":  document.getElementById('godina').value = uGodinama + "." + " godinu";
          break;
    case "2":
    case "3":
    case "4": document.getElementById('godina').value = uGodinama + "." + " godine";
    break;
    case "0":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9": document.getElementById('godina').value = uGodinama + "." + " godina";
          break;
  }
// document.getElementById('godina').value =  uGodinama;
    document.getElementById('mesec').value =  uMesecima;
    document.getElementById('dan').value =  uDanima;
   

    

}

document.getElementById("dugme").addEventListener("click", izracunaj);

 