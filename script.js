// script.js dinámico para Eco Huella


document.addEventListener("DOMContentLoaded", () => {
const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll(".menu-item");
const calcBtn = document.getElementById("calcBtn");
const resultBox = document.getElementById("resultBox");
const inputElectricidad = document.getElementById("electricidad");
const inputAgua = document.getElementById("agua");
const inputMovilidad = document.getElementById("movilidad");
const historyList = document.getElementById("historyList");


function showSection(id) {
sections.forEach(sec => sec.style.display = "none");
document.getElementById(id).style.display = "block";
window.scrollTo({ top: 0, behavior: "smooth" });
}


menuItems.forEach(item => {
item.addEventListener("click", () => {
const sectionId = item.getAttribute("data-section");


menuItems.forEach(i => i.classList.remove("active"));
item.classList.add("active");


showSection(sectionId);
});
});


calcBtn.addEventListener("click", () => {
const elec = parseFloat(inputElectricidad.value) || 0;
const water = parseFloat(inputAgua.value) || 0;
const mov = parseFloat(inputMovilidad.value) || 0;


if (elec <= 0 && water <= 0 && mov <= 0) {
resultBox.innerHTML = "<p class='error'>Ingresa al menos un valor para calcular tu huella.</p>";
return;
}


const huella = (elec * 0.4) + (water * 0.2) + (mov * 0.7);


let nivel = "";
if (huella < 50) nivel = "Tu impacto es BAJO. ¡Sigue así!";
else if (huella < 120) nivel = "Tu impacto es MEDIO. Puedes mejorar un poquito más.";
else nivel = "Tu impacto es ALTO. ¡Es momento de tomar acción!";


const fecha = new Date().toLocaleString();


const entry = document.createElement("li");
entry.textContent = `${fecha} → ${huella.toFixed(2)} puntos`;// script.js corregido y mejorado con navegación funcional y animaciones

document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const navButtons = document.querySelectorAll("nav.bottom-nav button, .btn-primary[data-target]");

  // Función para mostrar secciones
  function openPage(id) {
    pages.forEach(p => p.classList.remove("active"));
    const page = document.getElementById(id);
    if (page) {
      page.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // Activar los botones
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      openPage(target);
    });
  });

  // ACORDEÓN
  const accButtons = document.querySelectorAll(".acc-btn");

  accButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("open");
      const panel = btn.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  // Página inicial
  openPage("home");
});
historyList.prepend(entry);


resultBox.innerHTML = `
<h3>Resultado:</h3>
<p class='res-num'>${huella.toFixed(2)} puntos</p>
<p class='res-text'>${nivel}</p>
`;


resultBox.classList.add("show");
});


showSection("inicio");
});