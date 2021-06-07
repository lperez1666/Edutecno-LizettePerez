do {
  let num = parseInt(prompt("Ingrese un número del 1 al 20: "));
  if (num >= 1 && num <= 20) {
    /* MULTIPLICACIÓN */
    document.write("Multiplicación de " + num)
    for (let i=1; i<=num; i++){
      let resultadoMulti = i*num;
      document.write("<br>" + i + " * " + num + " = " + (resultadoMulti)); 
    }
    /* FACTORIAL */
    document.write("<br><br>" + "Factorial de " + num)
    for (let i=1; i<=num; i++) {
      let resultado = 1
        for (let j = 1; j <= i; j++){
          resultado *= j             
        }  
      document.write("<br>" + "Factorial de "+ i + " es " + (resultado)); 
    }
    break;
  } else {
      alert("Número inválido.");
  }
} while (true);






