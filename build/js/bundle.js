
document.addEventListener('DOMContentLoaded', function() {

    scrollNav();

    navegacionFija();

});

function navegacionFija() {

    const barra = document.querySelector('.header');

    // Registrar el intersection Observer
    const observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    })

    // Elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));

}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    
    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            });

        });
    });

}


document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        // Añadir funcion de mostrarImagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }

}

function mostrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId);

    // Genera la imagen en el HTML
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    // Cerrar imagen con click en el overlay
    overlay.onclick = function() {
        overlay.remove();
    }

    // Boton para cerrar imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    // Cerrando imagen cuando se preciona el boton
    cerrarImagen.onclick = function() {
        overlay.remove();
        body.style.overflow = 'scroll';
    }; 

    overlay.appendChild(cerrarImagen);

    // Mostrando en el html
    const body = document.querySelector('body');
    body.appendChild(overlay);
}

