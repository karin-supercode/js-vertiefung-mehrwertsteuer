// let was = document.getElementById("was");
// let satz = document.getElementById("satz");
// let betrag = document.getElementById("betrag");
// let ausgabe1 = document.getElementById("ausgabe1");

// function berechnen() {
// console.log(was.value);
// console.log(satz.value);
// console.log(betrag.value);

//   if document.getElementById("nettozubrutto").checked == true {
//     ausgabe1.innerHTML = "funzt";
//   } else {
//     ausgabe1.innerHTML = "funzt nicht";
//   }
// }

// function myFunction() {
//   if (document.getElementById("brutto").checked == true) {
//     demo.innerHTML = "brutto";
//   } else if (document.getElementById("neunzehn").checked == true) {
//     demo.innerHTML = "19%";
//   } else if (document.getElementById("sieben").checked == true) {
//     demo.innerHTML = "7%";
//   } else {
//     demo.innerHTML = "netto";
//   }
// }

// && document.getElementById("neunzehn").checked == true)

var nettozubrutto = document.getElementById("nettozubrutto");
var bruttozunetto = document.getElementById("bruttozunetto");
var neunzehn = document.getElementById("neunzehn");
var sieben = document.getElementById("sieben");
var betrag = document.getElementById("betrag");

let ausgabe1 = document.getElementById("ausgabe1");

function berechnen() {
  console.log(nettozubrutto.checked);
  console.log(neunzehn.checked);
  if (nettozubrutto.checked == true && neunzehn.checked == true) {
    let betrag1 = betrag.value;
    console.log(betrag1);

    let rechnung1 = betrag1 * 0.19;
    rechnung1 = rechnung1.toFixed(2);

    console.log(rechnung1);

    wertneu = Number(rechnung1) + Number(betrag1);
    wertneu = wertneu.toFixed(2);
    console.log(ausgabe1);

    ausgabe1.innerHTML = "Mehrwertsteuerbetrag (19%): " + rechnung1 + " EUR <br>";
    ausgabe1.innerHTML += "Bruttobetrag (Endpreis): " + wertneu + " EUR";

  } 

  else if (nettozubrutto.checked == true && sieben.checked == true) {
    let betrag1 = betrag.value;
    let rechnung1 = betrag1 * 0.09;
    rechnung1 = rechnung1.toFixed(2);

    wertneu = Number(rechnung1) + Number(betrag1);
    wertneu = wertneu.toFixed(2);

    ausgabe1.innerHTML = "Mehrwertsteuerbetrag (7%): " + rechnung1 + " EUR <br>";
    ausgabe1.innerHTML += "Bruttobetrag (Endpreis): " + wertneu + " EUR";

  }

  else if (bruttozunetto.checked == true && neunzehn.checked == true) {
    let betrag1 = betrag.value;
    let rechnung1 = betrag1 * 0.19;
    rechnung1 = rechnung1.toFixed(2);

    wertneu = Number(betrag1) - Number(rechnung1);
    wertneu = wertneu.toFixed(2);

    ausgabe1.innerHTML = "Mehrwertsteuerbetrag (19%): " + rechnung1 + " EUR <br>";
    ausgabe1.innerHTML += "Nettobetrag (Endpreis): " + wertneu + " EUR";



  } else {
    let betrag1 = betrag.value;
    let rechnung1 = betrag1 * 0.07;
    rechnung1 = rechnung1.toFixed(2);

    wertneu = Number(betrag1) - Number(rechnung1);
    wertneu = wertneu.toFixed(2);

    ausgabe1.innerHTML = "Mehrwertsteuerbetrag (7%): " + rechnung1 + " EUR <br>";
    ausgabe1.innerHTML += "Nettobetrag (Endpreis): " + wertneu + " EUR";
  }
}
