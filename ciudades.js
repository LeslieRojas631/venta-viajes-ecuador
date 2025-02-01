const quito = {
    titulo: 'Quito: La Capital de los Andes',
    precio: 'El precio promocional por hoy es de $25',
    subtitulo: 'Descubre el centro histórico más grande y mejor preservado de América',
    parrafo: "Quito, la capital de Ecuador, se encuentra en el corazón de los Andes, a 2,850 metros sobre el nivel del mar. Su casco histórico, declarado Patrimonio de la Humanidad por la UNESCO, es un lugar donde el pasado y el presente se entrelazan. La Plaza Grande, rodeada de majestuosos edificios coloniales, te invita a explorar la historia del país. No puedes perderte la Basílica del Voto Nacional, un imponente símbolo de la ciudad, ni el mirador del Panecillo, desde donde disfrutarás de vistas panorámicas espectaculares de la ciudad, rodeada por volcanes. Además, Quito es el lugar perfecto para probar la gastronomía andina en sus mercados tradicionales y restaurantes."
};

const guayaquil = {
    titulo: 'Guayaquil: La Perla del Pacífico',
    precio: 'El precio promocional por hoy es de $20',
    subtitulo: 'Sumérgete en la modernidad y encanto costero de la ciudad',
    parrafo: "Guayaquil, la ciudad más grande de Ecuador, es un vibrante centro comercial y cultural. El Malecón 2000, a lo largo del río Guayas, ofrece un paseo impresionante con tiendas, restaurantes y lugares de entretenimiento. Puedes visitar la Torre Morisca, un testimonio de la influencia colonial, o explorar el barrio Las Peñas, con sus coloridas casas y callejones llenos de arte. Además, la ciudad es famosa por su vida nocturna y su clima tropical. Guayaquil también es la puerta de entrada a las hermosas playas de la costa ecuatoriana, donde podrás disfrutar de sol y mar."
};

const cuenca = {
    titulo: 'Cuenca: La Joya de los Andes',
    precio: 'El precio promocional por hoy es de $30',
    subtitulo: 'Explora la arquitectura colonial y la serenidad de esta hermosa ciudad',
    parrafo: "Cuenca, una ciudad encantadora que respira historia y cultura, es conocida por su arquitectura colonial bien conservada. Sus calles adoquinadas, adornadas con casas de balcones de madera, y su impresionante Catedral Nueva son solo algunos de los tesoros que descubrirás. La ciudad está rodeada por hermosos paisajes naturales, como el río Tomebamba, que atraviesa la ciudad. Cuenca es también famosa por su arte y sus mercados de artesanía, donde puedes encontrar los tradicionales sombreros de paja toquilla. Es un lugar perfecto para aquellos que buscan paz, belleza y una conexión profunda con la tradición ecuatoriana."
};

const banos = {
    titulo: 'Baños de Agua Santa: Aventura en la Naturaleza',
    precio: 'El precio promocional por hoy es de $15',
    subtitulo: 'Un paraíso natural lleno de adrenalina y relajación',
    parrafo: "Baños de Agua Santa, conocida como la puerta de entrada a la Amazonía, es un destino que combina aventura y relajación. Las aguas termales naturales que le dan su nombre son el lugar perfecto para relajarte después de un día lleno de emoción. Además, Baños ofrece actividades para los amantes de la adrenalina, como rafting, canopy y senderismo. Uno de los lugares más impresionantes es la Cascada del Pailón del Diablo, donde podrás admirar la majestuosidad de las caídas de agua. Este destino es ideal para quienes buscan una conexión con la naturaleza, tanto para relajarse como para disfrutar de la aventura en sus paisajes verdes y exuberantes."
};


export {
    quito,
    guayaquil,
    cuenca,
    banos
};


//const destinos = { quito, guayaquil, cuenca, banos };


//ES6
// export { objeto1, objeto2 };
//import { objeto1, objeto2 } from './ciudades';




/*
document.querySelectorAll('ul li a').forEach((link, index) => {
    link.addEventListener('click', () => {
        const destino = Object.values(destinos)[index];
        document.getElementById('titulo').innerText = destino.titulo;
        document.getElementById('subtitulo').innerText = destino.subtitulo;
        document.getElementById('parrafo').innerHTML = destino.parrafo;
    });
}); 
*/