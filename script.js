import { quito, guayaquil, cuenca, banos } from './ciudades.js';

//Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')
//console.log(enlaces)

//Agregar un evento CLICK a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        //Remover ACTIVO
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        //Agregar ACTIVE al que corresponda
        this.classList.add('active')

        //Obtener el contenido correspondiente según el enlace
        let contenido = obtenerContenido(this.textContent)

        //Mostrar el contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    });
});

//Funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Quito': quito,
        'Guayaquil': guayaquil,
        'Cuenca': cuenca,
        'Baños de Agua Santa': banos
    };
    return contenido[enlace];
}