/* Variable cantidad de veces que quiere jugar*/
var juegos = parseInt(prompt("Ingrese el número de veces que desea jugar: " , 4));
var i=0;

    while(i<juegos){
        
        var eleccionUsuario = prompt("¿piedra, papel o tijera?" , "piedra"); /* Jugador selecciona jugada hasta acabar turnos seleccionados */
        eleccionUsuario = eleccionUsuario.toLocaleLowerCase(); /* valores en minuscula */
        let eleccion = ['papel','piedra','tijera']; /* Matriz de elecciones */
        let numRandom = Math.floor (Math.random()*3); /* Generar numero al azar */       
        let eleccionMaquina = eleccion [numRandom]; /* Pasar el numero generado a matriz de eleccion y almacenarlo en nueva variable */       
        if (eleccionUsuario === eleccionMaquina) { /* Comparar las opciones con if/else y dar resultado */
            alert ("¡Empate!");
            } else if (eleccionUsuario === 'papel' && eleccionMaquina === 'piedra') { 
            alert ("¡Tú ganas!");
            } else if (eleccionUsuario === 'piedra' && eleccionMaquina === 'tijera') { 
            alert ("¡Tú ganas!");
            } else if (eleccionUsuario === 'tijera' && eleccionMaquina === 'piedra') { 
            alert ("¡Pierdes!");
            } else if (eleccionUsuario === 'piedra' && eleccionMaquina === 'papel') { 
            alert ("¡Pierdes!");
            } else if (eleccionUsuario === 'papel' && eleccionMaquina === 'tijera') { 
            alert ("¡Pierdes!");
            } else if (eleccionUsuario === 'tijera' || eleccionMaquina === 'papel') { 
            alert ("¡Tú ganas!");
            } else { 
            alert ("Entrada no válida, inténtalo de nuevo"); 
            }
         i= i+1
    }













