let form = document.getElementById( "formulario" );

form.addEventListener( "submit",  ( event ) => {
    event.preventDefault();
    limpiarErrores();
    let nombre = document.getElementById( "nombre" ).value;
    let asunto = document.getElementById( "asunto" ).value;
    let mensaje = document.getElementById( "mensaje" ).value;
    let resultado = validar(nombre,asunto,mensaje);
    if(resultado == true) {
    exito();
    };
});

const limpiarErrores = () => {
document.querySelector(".resultado").innerHTML = "";
document.querySelector(".errorNombre").innerHTML = "";
document.querySelector(".errorAsunto").innerHTML = "";
document.querySelector(".errorMensaje").innerHTML = "";
};

const exito = () => {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito !!!";
};

const validar = (nombre,asunto,mensaje) => {
    let pasamosLaValidacion = true;
    let validacionNombre = /[a-zA-Z]/gim;

    if (validacionNombre.test(nombre) == false) {
    document.querySelector(".errorNombre").innerHTML = "El nombre es requerido."
    pasamosLaValidacion = false;
    };

    let validacionAsunto = /[a-zA-Z]/gim;

    if (validacionAsunto.test(asunto) == false) {
    document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido."
    pasamosLaValidacion = false;
    };

    let validacionMensaje = /[a-zA-Z]/gim;

    if (validacionNombre.test(mensaje) == false) {
    document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido."
    pasamosLaValidacion = false;
    };
    
    return pasamosLaValidacion;
};
    