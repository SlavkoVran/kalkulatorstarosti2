

aa = console.log();
function izracunaj() {
let rodjendan = document.getElementById("unos").value;
    let datumRodjenja = new Date(rodjendan);
    let trenutno = new Date();
    let milisekunda = (1000 * 60 * 60 *24);
    let drugiDatum = document.getElementById("unos2").value;
    let drugiDatum1 = new Date (drugiDatum);
    let razlika;
   
    
    datumRodjenjaM = datumRodjenja / milisekunda;
    trenutnoM = trenutno / milisekunda;

    if (datumRodjenja < drugiDatum1){
          razlika = drugiDatum1 - datumRodjenja;
    }
    else{
      razlika = datumRodjenja - drugiDatum1;
    }
    razlikaUdanima = razlika / milisekunda;
document.getElementById("razlika2").value = razlikaUdanima;

    uDanima = Math.floor((trenutno - datumRodjenja) / milisekunda);
    uGodinama = Math.floor((uDanima / 365));
    uMesecima = Math.floor(uGodinama * 12);
    novaG = String(uGodinama); 
    novaM = String(uMesecima);
    novaD = String(uDanima);

    poslednjaG = novaG[novaG.length-1];
    poslednjaM = novaM[novaM.length-1];
    poslednjaD = novaD[novaD.length-1];
    
  switch (poslednjaG) {
    case "1":  document.getElementById('godina').value = uGodinama + "-u" + " godinu";
          break;
    case "2":
    case "3":
    case "4": document.getElementById('godina').value = uGodinama + "-e" + " godine";
    break;
    case "0":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9": document.getElementById('godina').value = uGodinama + "" + " godina";
    
          break;
          
  }
 
  switch (poslednjaM) {
    case "1":  document.getElementById('mesec').value = uMesecima + "" + " mesec";
          break;
    case "2":
    case "3":
    case "4": document.getElementById('mesec').value = uMesecima + "" + " meseca";
    break;
    case "0":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9": 
    case "12": document.getElementById('mesec').value = uMesecima + "" + " meseci";
          break;
           }

           switch (poslednjaD) {
            case "1":  document.getElementById('dan').value = uDanima + "" + " dan";
                  break;
            case "2":
            case "3":
            case "4": 
            case "0":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9": document.getElementById('dan').value = uDanima + "" + " dana.";
                  break;
                   }
        

}

document.getElementById("unos").addEventListener("focus", function(){
      this.type = "date";
});


document.getElementById("unos").addEventListener("focusout", function(){
      if(this.value == ""){
            this.type = "text";
      }
      
});

// document.getElementById("artikal").addEventListener("click", izracunaj);

 