## Requisitos previos

- Conocimientos básicos de HTML y CSS.  
- Un entorno de desarrollo para escribir y ejecutar código JavaScript.

## Configuración inicial

1. Clona o descarga los archivos HTML y CSS necesarios para este proyecto desde el repositorio en GitHub.

## Funcionamiento del código JavaScript

El código JavaScript proporcionado se encarga de actualizar la información mostrada en la página web cuando se hace clic en un enlace de destino turístico.

### Importación de datos de los destinos  

Las variables `quito`, `guayaquil`, `cuenca`, y `banos` se importan desde el archivo `ciudades.js`, que contiene la información de cada destino. Asegúrate de que este archivo esté disponible en el repositorio junto con el código JavaScript.

### Obtención de elementos del DOM

El código utiliza el método `document.getElementById` para obtener los elementos del DOM necesarios para actualizar la información de la página. Estos elementos se asignan a las siguientes variables:  

- `enlaces`: una colección de todos los elementos de ancla (`<a>`) en la página.  
- `tituloElemento`: el elemento de título (`<h2>`) donde se mostrará el nombre del destino seleccionado.  
- `subTituloElemento`: el elemento de subtítulo (`<h3>`) donde se mostrará información adicional del destino.  
- `parrafoElemento`: el elemento de párrafo (`<p>`) donde se mostrará la descripción del destino seleccionado.  
- `precioElemento`: el elemento donde se mostrará el precio promocional del destino seleccionado.

### Agregar evento CLICK a los enlaces

Se agrega un evento `click` a cada enlace mediante un bucle `forEach`. Cuando se hace clic en un enlace, se ejecuta la función de devolución de llamada proporcionada. El código dentro de esta función realiza las siguientes acciones:

- Remueve la clase `active` de todos los enlaces utilizando otro bucle `forEach`.  
- Agrega la clase `active` al enlace actual (`this`).  
- Obtiene el contenido correspondiente al destino seleccionado utilizando la función `obtenerContenido` y el texto del enlace actual.  
- Actualiza los elementos del DOM con la información del destino seleccionado.

### Función para obtener contenido del destino

La función `obtenerContenido` toma el texto del enlace como parámetro y devuelve el contenido correspondiente del destino desde el archivo `ciudades.js`. Utiliza un objeto `contenido` para mapear el texto del enlace con el contenido del destino.  

## Personalización del contenido

Puedes personalizar el contenido de los destinos modificando el archivo `ciudades.js`. Cada destino es representado por un objeto con propiedades como `titulo`, `subtitulo`, `parrafo` y `precio`.

## Conclusiones

Este proyecto demuestra cómo combinar HTML, CSS y JavaScript para crear una experiencia interactiva en la presentación de información sobre destinos turísticos. La implementación de eventos dinámicos permite mejorar la usabilidad y fomentar una navegación fluida, mientras que la organización del contenido mediante módulos facilita la escalabilidad y mantenimiento del código. Este enfoque proporciona una base sólida para futuras extensiones, como la integración de APIs o funciones avanzadas de búsqueda y filtrado, que podrían enriquecer aún más la aplicación.
