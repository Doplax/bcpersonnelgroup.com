// FUNCIONES
// Función para manejar la animación del menú
function scrollMenu() {
    const header = document.getElementById("header");
    const navLogo = document.querySelector('.nav__logo')

    console.log(navLogo);
    if (window.scrollY > 10) {
        header.classList.add("header__scroll");
        //navLogo.src = '../img/company_logo_black.png'
    } else {
        header.classList.remove("header__scroll");
    }
}

function nextSection() {
    // Cuando hacemos scroll y nos quedamos a mitad de camino, esto nos ayuda a centrar la sección
    if (window.innerWidth > 1100) {
        const sections = document.querySelectorAll(".section");
        let scrollTimeout;
    
        window.addEventListener("scroll", () => {
        clearTimeout(scrollTimeout);
    
        scrollTimeout = setTimeout(() => {
            let closestSection = null;
            let minDistance = Number.MAX_VALUE;
    
            sections.forEach((section) => {
            const distanceFromTop = Math.abs(section.getBoundingClientRect().top);
            if (distanceFromTop < minDistance) {
                minDistance = distanceFromTop;
                closestSection = section;
            }
            });
    
            window.scrollTo({
            top: closestSection.offsetTop,
            behavior: "smooth",
            });
        }, 100);
        });
    }
}




// VARIABLES
const navToggle = document.querySelector(".nav-toggle");
const navMenuItem = document.querySelector(".nav-menu");
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("currentYear");
yearElement.innerText = currentYear;

document.addEventListener("DOMContentLoaded", nextSection);

window.addEventListener("scroll", ()=> scrollMenu());


