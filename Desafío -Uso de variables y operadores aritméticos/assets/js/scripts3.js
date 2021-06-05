/* Año, semanas y dias */

/* Definir variables */

var dias = parseInt(prompt("Ingrese cantidad en dias: ")); /* Solicitar valor variable dias */
var año = Math.floor(dias/365);
var semanas = Math.floor((dias-365)/7);
var dia = Math.floor(dias-365-7);

document.write( "En " + dias +" dias hay " + año + " año, " + semanas + " semanas y " + dia + " dias.");