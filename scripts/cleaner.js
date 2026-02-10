// <script src="scripts/cleaner.js"></script>
window.onload = function () {
    removerSpam();
};

function removerSpam() {
    // Buscar la sección en el body que contiene el enlace
    var element = document.querySelector('body a[href*="mobiri.se"]').closest('section');
    // console.log('element', element);

    // Verificar si se encontró el elemento y eliminarlo si es necesario
    if (element) {
        element.parentNode.removeChild(element);
    }
    // closest('section') se usa para encontrar el ancestro más cercano que sea un elemento <section>. Luego, si se encuentra la sección, se elimina del DOM. 
}

// Funcionamiento del script:
// Este script busca un enlace que contenga "mobiri.se" en su href dentro del body y, si lo encuentra, lo elimina del DOM.
//<section> ... </section>
//<section class="footer3 other-class"> ... footer ... </section>
//<section> ... esto se eliminaría ...</section>
//<section> ... esto también se eliminaría ...</section>
// 

// Seleccionamos el bloque footer3, asumimos que sólo hay uno o queremos el primero
const footerSection = document.querySelector('section.footer3');

if (footerSection) {
  // Empieza desde el siguiente hermano justo después del footer
  let next = footerSection.nextElementSibling;

  // Recorremos todos los siguientes nodos hermanos
  while (next) {
    // Si es una sección, la eliminamos
    if (next.tagName.toLowerCase() === 'section') {
      const toRemove = next;
      next = next.nextElementSibling; // movemos el cursor antes de eliminar
      toRemove.remove();
    } else {
      // Si no es sección, simplemente avanzamos
      next = next.nextElementSibling;
    }
  }
} else {
  console.warn('No se encontró ninguna sección con la clase "footer3".');
}
