let resultado = document.querySelector(".resultado");



const sumar = () => {
    let num1 = parseFloat(document.getElementById("valor1").value);
    let num2 = parseFloat(document.getElementById("valor2").value);
    let suma = num1 + num2;
    resultado.innerHTML = suma;
};

btn_suma = document.getElementById("btn-sumar");
btn_suma.addEventListener("click", sumar);


const resta = () => {
    let num1 = parseFloat(document.getElementById("valor1").value);
    let num2 = parseFloat(document.getElementById("valor2").value);
    let resta = num1 - num2;
    if (resta >= 0){
        resultado.innerHTML = resta;
    }
    else{
        resultado.innerHTML = 0;
    }
}

btn_resta = document.getElementById("btn-restar");
btn_resta.addEventListener("click", resta);
