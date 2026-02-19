window.onload = function () {
    removerSpam();
};

function removerSpam() {
    // 1) Eliminar bloques con mobiri.se (PROTEGIENDO CUALQUIER MENU)
    var spamLinks = document.querySelectorAll('body a[href*="mobiri.se"]');
    spamLinks.forEach(function(link) {
        var section = link.closest('section');
        if (section && 
            !section.classList.contains('footer3') && 
            !section.classList.contains('menu2') && 
            !section.classList.contains('menu3') &&  // ← AGREGAR ESTO
            !section.querySelector('nav')) {          // ← O mejor aún, proteger cualquier nav
            section.remove();
        }
    });
    
    // 2) Eliminar secciones VACÍAS después del footer (SIN TOCAR MENU)
    const footerSection = document.querySelector('section.footer3');
    if (footerSection) {
        let next = footerSection.nextElementSibling;
        while (next) {
            if (next.tagName.toLowerCase() === 'section' && 
                !next.classList.contains('menu2') &&
                !next.classList.contains('menu3') &&  // ← AGREGAR ESTO TAMBIÉN
                !next.querySelector('nav') &&
                !next.querySelector('a[href*="mobiri.se"]') &&
                next.children.length < 3) {
                next.remove();
            }
            next = next.nextElementSibling;
        }
    }
}