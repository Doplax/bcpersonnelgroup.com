// Función para manejar el evento de clic en el botón de menú
function handleMenuToggle() {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
}

// Función para cerrar el menú
function closeMenu() {
    navMenu.classList.remove("nav-menu_visible");
}

// Función para manejar el evento de desplazamiento en la ventana
function handleScroll() {
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



//function renderSkills(skills) {
//    const skillsContainer = document.querySelector(".skill__list");

//    skills.forEach((skill) => {
//        const div = document.createElement('div');
//        div.innerHTML = `
//        <div class="skill__item">
//            <img src="${skill.icon}" alt="${skill.altText}">
//            <div class="skill__name">${skill.skillName}</div>
//        </div>`;
//    skillsContainer.appendChild(div)
//    });

//}



const navToggle = document.querySelector(".nav-toggle");
const navMenuItem = document.querySelector(".nav-menu");
const check = document.querySelector(".check");


const header = document.querySelector('#header');

// Registra los controladores de eventos
navToggle.addEventListener("click", handleMenuToggle);
navMenuItem.addEventListener("click", closeMenu);
//check.addEventListener("click", handleLanguage);
window.addEventListener("scroll", handleScroll);


//document.addEventListener("DOMContentLoaded", () => {
//    const sections = document.querySelectorAll(".section");
//    let scrollTimeout;
  
//    window.addEventListener("scroll", () => {
//      clearTimeout(scrollTimeout);
  
//      scrollTimeout = setTimeout(() => {
//        let closestSection = null;
//        let minDistance = Number.MAX_VALUE;
  
//        sections.forEach((section) => {
//          const distanceFromTop = Math.abs(section.getBoundingClientRect().top);
//          if (distanceFromTop < minDistance) {
//            minDistance = distanceFromTop;
//            closestSection = section;
//          }
//        });
  
//        window.scrollTo({
//          top: closestSection.offsetTop,
//          behavior: "smooth",
//        });
//      }, 100);
//    });
//  });
  


  