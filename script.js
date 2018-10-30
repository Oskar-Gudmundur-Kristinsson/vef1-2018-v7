/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.');
  play();
  if(confirm("vilt þú spilla aftur")) {
    start();
  }
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  var timeStart = new Date();
  var answered = 0;
  var correct = 0;
  while(answered<10){
    var ret = ask();
    if(ret==true){
      correct++;
    }
    answered++;
    if(ret==null){
      break;
    }
  }
  var timeEnd = new Date();
  var time = (timeEnd-timeStart)/1000;
  var secs = time %60;
  var minutes = Math.floor(time/60);
  var aPerSec = answered/(time);
  alert("þú svaraðir " + correct + " rett af "+ answered+" á " +minutes+":"+secs+"\n"+ "Meðalrétt svör á sekúndum erú "+ aPerSec);
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  var answer= -1;
  var a =-1;
  var b =-1;
  switch(randomNumber(0,3)){
    case 0:
      b = randomNumber(1,100);
      a = randomNumber(1,100);
      answer = prompt("what is "+a+" + " +b);
      if(answer == a+b){
        return true;
        break;
      }
      if(answer == null || answer==""){
        return null;
      }
    case 1:
      b = randomNumber(1,100);
      a = randomNumber(1,100);
      answer = prompt("what is "+a+" - " +b);
      if(answer == a-b){
        return true;
        break;
      }
      if(answer == null || answer==""){
        return null;
      }
    case 2:
      b = randomNumber(1,10);
      a = randomNumber(1,10);
      answer = prompt("what is "+a+" * " +b);
      if(answer == a*b){
        return true;
        break;
      }
      if(answer == null || answer==""){
        return null;
      }
    case 3:
      b = randomNumber(1,10);
      a = randomNumber(1,10);
      var c = a*b;
      answer = prompt("what is "+c+" / " +a);
      if(answer == b){
        return true;
        break;
      }
      if(answer == null || answer==""){
        return null;
      }
    return false;
  }
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
