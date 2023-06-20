//querySelector

const heading = document.querySelector('.header__texto h2') //retorna a 0 o 1 elementos
heading.textContent = 'Nuevo Heading';
console.log(heading);


//queriSelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');

//getElementById

//const heading2 = document.getElementById('heading');
//console.log(heading2);

//Generar un nuevo enlace

const nuevoEnlace = document.createElement('A');

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';

//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace')

//Agregarlo al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//Eventos

console.log(1);

window.addEventListener('load',function(){ //load espera a que el JS y los archivos que dependen del HTML esten listos

    console.log(2);
});

window.onload = function() {
   console.log(3); 
}

document.addEventListener('DOMContentLoaded', function(){ //Solo espera por el HTML, pero no espera CSS o imagenes
    console.log(4);
})

console.log(2);

console.log(5);


window.onscroll = function(){
    console.log('scrolling...');
}

//Seleccionar elementos y asociarles un evento, esto es para prevenir

const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    evento.preventDefault();
    //Validar un formulario

    console.log('enviando formulario');
});



//Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTextoEnConsola);
email.addEventListener('input', leerTextoEnConsola);
mensaje.addEventListener('input', leerTextoEnConsola);

//El evento de Submit 
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

//Validar el formulario

const {nombre, email, mensaje} = datos;
console.log(nombre); 
console.log(email); 
console.log(mensaje); 

if(nombre === ''|| email === '' || mensaje === '') {
    mostrarError('Todos los campos son obligatorios', 'error')
    return; //corta la linea del código
}

//Enviar el formulario

console.log('Enviando Formulario');

});

function leerTextoEnConsola(e) {
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

//Crear lo mismo de abajo pero de manera compacta

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    //Desaparezca después de 5 segundos

    setTimeout(() => {
        alerta.remove();
    }, 5000);

}
/**
//Muestra un error en pantalla
function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    //Desaparezca después de 5 segundos
    setTimeout(() => {
        error.remove();

    }, 5000);




}

//Muestra una alerta de que se envió correctamente

function mostrarEnvioCorrecto(mensaje){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classLista.add('Envio Correcto');

    formulario.appendChild(alerta);

    //desaparezca después de 5 segundos
    setTimeout(() => {
        alerta.remove();

    }, 5000);


}
*/