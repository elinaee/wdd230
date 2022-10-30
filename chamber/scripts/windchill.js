var temp= 57;
var wSpeed= 15;
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill= Math.round(windChill);
document.getElementById("windChill").innerHTML= windChill;


/////////////////

const tC = 10;
const skmH = 8.05;

document.querySelector('.temperature').textContent = tC;
document.querySelector('.speed').textContent = skmH;

const tF = tC * (9/5) + 32;
const smH = skmH / 1.609;

if (tF <= 50 && smH > 3) { 
  const f = 35.74 + 0.6215 * tF - 35.75 * (smH**0.16) + 0.4275 * tF * (smH**0.16);
  document.querySelector('.wind').textContent = f.toFixed(2);
}
else {
  document.querySelector('.wind').textContent = 'N/A';
}